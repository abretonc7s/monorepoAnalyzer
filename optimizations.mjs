// optimizations.mjs
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { exec } from "child_process";
import fs, { readFileSync } from "fs";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import util from "util";
import zlib from "zlib";
import chalk from "chalk";

const execPromise = util.promisify(exec);

const OPTIMIZATION_LEVELS = {
  development: {
    name: "Development",
    description: "No optimizations, includes source maps and console logs",
    config: {
      sourcemap: true,
      treeshake: false,
      babel: {
        presets: [["@babel/preset-env", { modules: false }]],
      },
      terser: false,
    },
  },
  basic: {
    name: "Basic",
    description: "Basic optimizations with safe defaults",
    config: {
      sourcemap: true,
      treeshake: {
        moduleSideEffects: true,
      },
      babel: {
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              useBuiltIns: "usage",
              corejs: 3,
              targets: "defaults",
            },
          ],
        ],
      },
      terser: {
        compress: {
          passes: 1,
          dead_code: true,
          drop_console: false,
        },
      },
    },
  },
  standard: {
    name: "Standard",
    description: "Balanced optimizations for production use",
    config: {
      sourcemap: false,
      treeshake: {
        moduleSideEffects: true,
        propertyReadSideEffects: true,
      },
      babel: {
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              useBuiltIns: "usage",
              corejs: 3,
              targets: {
                browsers: ["last 2 versions", "not dead"],
              },
            },
          ],
        ],
      },
      terser: {
        compress: {
          passes: 1,
          pure_getters: true,
          drop_console: true,
        },
        mangle: true,
      },
    },
  },
  aggressive: {
    name: "Aggressive",
    description:
      "Maximum optimizations, might affect debugging and compatibility",
    config: {
      sourcemap: false,
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      babel: {
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              useBuiltIns: "usage",
              corejs: 3,
              targets: {
                browsers: [
                  "last 1 Chrome version",
                  "last 1 Firefox version",
                  "last 1 Safari version",
                ],
              },
              exclude: [
                "@babel/plugin-transform-regenerator",
                "@babel/plugin-transform-async-to-generator",
              ],
            },
          ],
        ],
      },
      terser: {
        ecma: 2020,
        compress: {
          passes: 2,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          unsafe_methods: true,
          drop_console: true,
          drop_debugger: true,
        },
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
      },
    },
  },
};

function createConfig(input, output, level) {
  const name = path.basename(output, ".js");
  const optimization = OPTIMIZATION_LEVELS[level];
  const versions = getPackageVersions();
  const sdkVersion = versions[name.toLowerCase()];

  const config = {
    input,
    output: {
      file: `dist/${level}/${name}/${sdkVersion}/${output}`,
      format: "es",
      sourcemap: optimization.config.sourcemap,
    },
    treeshake: optimization.config.treeshake,
    plugins: [
      json(),
      nodeResolve({
        browser: true,
        preferBuiltins: false,
        mainFields: ["browser", "module", "main"],
      }),
      commonjs({
        transformMixedEsModules: true,
      }),
      babel({
        babelHelpers: "bundled",
        ...optimization.config.babel,
      }),
      visualizer({
        filename: `stats/${level}/${name}/${sdkVersion}/stats.html`,
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
      }),
    ],
  };

  if (optimization.config.terser) {
    config.plugins.push(terser(optimization.config.terser));
  }

  return config;
}

function generateConfigs() {
  const sdks = [
    {
      name: "Coinbase SDK",
      input: "node_modules/@coinbase/wallet-sdk/dist/index.js",
      output: "coinbase.js",
    },
    {
      name: "MetaMask SDK",
      input: "node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js",
      output: "metamask.js",
    },
    {
      name: "WalletConnect",
      input: "node_modules/@walletconnect/web3wallet/dist/index.es.js",
      output: "walletconnect.js",
    },
  ];

  const configs = [];

  for (const level of Object.keys(OPTIMIZATION_LEVELS)) {
    for (const sdk of sdks) {
      configs.push(createConfig(sdk.input, sdk.output, level));
    }
  }

  return configs;
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function getPackageVersions() {
  const sdkVersions = {
    coinbase: null,
    metamask: null,
    walletconnect: null,
  };

  try {
    sdkVersions.coinbase = JSON.parse(
      readFileSync("node_modules/@coinbase/wallet-sdk/package.json")
    ).version;
    sdkVersions.metamask = JSON.parse(
      readFileSync("node_modules/@metamask/sdk/package.json")
    ).version;
    sdkVersions.walletconnect = JSON.parse(
      readFileSync("node_modules/@walletconnect/web3wallet/package.json")
    ).version;
  } catch (error) {
    console.error("⚠️ Error reading package versions:", error.message);
  }

  return sdkVersions;
}

async function promptUser(question, defaultValue = "n") {
  return new Promise((resolve) => {
    const options = defaultValue.toLowerCase() === "y" ? "[Y/n]" : "[y/N]";
    process.stdout.write(`${chalk.cyan(question)} ${chalk.gray(options)}: `);
    process.stdin.once("data", (data) => {
      const input = data.toString().trim().toLowerCase();
      resolve(input === "" ? defaultValue === "y" : input === "y");
    });
  });
}

function formatDuration(ms) {
  if (!ms || ms === 0) return "0ms";

  if (ms < 1000) {
    return `${Math.round(ms)}ms`;
  }

  const seconds = ms / 1000;
  if (seconds < 60) {
    return `${seconds.toFixed(2)}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = (seconds % 60).toFixed(2);
  return `${minutes}m ${remainingSeconds}s`;
}
const buildTiming = {
  versionCheck: {
    duration: 0,
    description: "Time spent checking SDK versions",
  },
  directorySetup: {
    duration: 0,
    description: "Time spent creating output directories",
  },
  bundleBuild: {
    duration: 0,
    description: "Time spent building bundles with Rollup",
  },
  analysis: {
    duration: 0,
    description: "Time spent analyzing bundle sizes",
  },
  reportGeneration: {
    duration: 0,
    description: "Time spent generating HTML report",
  },
  total: {
    duration: 0,
    description: "Total execution time",
  },
};

async function promptForOptimizationLevels(existingLevels) {
  console.log("\nAvailable optimization levels:");
  Object.entries(OPTIMIZATION_LEVELS).forEach(([key, value]) => {
    const exists = existingLevels.includes(key);
    console.log(
      `  ${exists ? "📦" : "⭕"} ${key}: ${value.name} - ${value.description}`
    );
  });

  const answer = await promptUser("\nBuild all levels? [default: yes]");

  if (answer) {
    return Object.keys(OPTIMIZATION_LEVELS);
  }

  console.log("\nEnter level numbers (comma-separated) to build:");
  const levels = Object.keys(OPTIMIZATION_LEVELS);

  levels.forEach((level, index) => {
    console.log(`  ${index + 1}. ${level}`);
  });

  return new Promise((resolve) => {
    process.stdout.write("Selection [default: all]: ");
    process.stdin.once("data", (data) => {
      const input = data.toString().trim();
      if (input === "") {
        resolve(levels); // Default to all levels if empty input
        return;
      }

      const selected = input
        .split(",")
        .map((n) => levels[parseInt(n.trim()) - 1])
        .filter(Boolean);

      resolve(selected.length ? selected : levels);
    });
  });
}

async function handleExistingLevels(existingLevels) {
  console.log(
    `\n📦 ${chalk.blue("Found existing builds for:")} ${chalk.green(existingLevels.join(", "))}`
  );
  const rebuildAll = await promptUser(
    "Would you like to rebuild any levels?",
    "n"
  );

  if (rebuildAll) {
    return await promptForOptimizationLevels(existingLevels);
  }

  return [];
}

async function buildSelectedLevels(selectedLevels) {
  if (selectedLevels.length === 0) return;

  const buildStartTime = Date.now();
  buildTiming.bundleBuild.startTime = buildStartTime;

  console.log(`\n📦 Building bundles for: ${selectedLevels.join(", ")}`);

  for (const level of selectedLevels) {
    const levelStartTime = Date.now();
    console.log(`\n🔨 Building ${OPTIMIZATION_LEVELS[level].name} bundles...`);
    await execPromise(`rollup -c --environment OPTIMIZATION_LEVEL:${level}`);
    console.log(
      `✓ ${OPTIMIZATION_LEVELS[level].name} build completed (${formatDuration(levelStartTime)})`
    );
  }

  buildTiming.bundleBuild.duration = Date.now() - buildStartTime;
}

async function initializeAnalysis() {
  try {
    history = JSON.parse(fs.readFileSync(historyPath, "utf8"));
  } catch {
    history = [];
    fs.mkdirSync("stats", { recursive: true });
  }

  buildTiming.total.startTime = Date.now();
  resetTimings();

  const currentVersions = await checkVersions();
  return currentVersions;
}

function resetTimings() {
  Object.keys(buildTiming).forEach((key) => {
    buildTiming[key] = {
      ...buildTiming[key],
      startTime: 0,
      duration: 0,
    };
  });
}

async function checkVersions() {
  const startTime = Date.now();
  buildTiming.versionCheck.startTime = startTime;

  const currentVersions = getPackageVersions();

  buildTiming.versionCheck.duration = Date.now() - startTime;
  console.log(`\n📦 Package versions detected (${formatDuration(startTime)}):`);
  Object.entries(currentVersions).forEach(([pkg, version]) => {
    console.log(`  - ${pkg}: ${version}`);
  });

  return currentVersions;
}

async function setupDirectories(versions) {
  const startTime = Date.now();
  buildTiming.directorySetup.startTime = startTime;

  console.log("\n📁 Creating output directories...");

  const sdks = ["coinbase", "metamask", "walletconnect"];
  for (const level of Object.keys(OPTIMIZATION_LEVELS)) {
    for (const sdk of sdks) {
      const version = versions[sdk];
      if (version) {
        fs.mkdirSync(`dist/${level}/${sdk}/${version}`, { recursive: true });
        fs.mkdirSync(`stats/${level}/${sdk}/${version}`, { recursive: true });
      }
    }
  }

  buildTiming.directorySetup.duration = Date.now() - startTime;
  console.log(`✓ Directories created (${formatDuration(startTime)})`);
}

async function analyzeLevelBundles(level, versions, sdks) {
  const levelStartTime = Date.now();
  console.log(`\n📏 Measuring ${OPTIMIZATION_LEVELS[level].name} bundles...`);
  const levelResults = [];

  for (const sdk of sdks) {
    const version = versions[sdk];
    if (!version) continue;

    const sdkDir = `dist/${level}/${sdk}/${version}`;
    if (!fs.existsSync(sdkDir)) continue;

    const processingStartTime = Date.now();
    console.log(`  - Processing ${sdk} v${version}`);

    const result = await analyzeSdkBundle(sdk, version, sdkDir);
    if (result) {
      levelResults.push(result);
      console.log(
        `    ✓ Processed (${formatDuration(Date.now() - processingStartTime)})`
      );
    }
  }

  console.log(
    `✓ ${OPTIMIZATION_LEVELS[level].name} analysis completed (${formatDuration(Date.now() - levelStartTime)})`
  );
  return levelResults;
}

async function analyzeSdkBundle(sdk, version, sdkDir) {
  const files = fs.readdirSync(sdkDir);
  for (const file of files) {
    if (!file.endsWith(".js")) continue;

    const filePath = path.join(sdkDir, file);
    const content = fs.readFileSync(filePath);
    const gzipped = zlib.gzipSync(content);
    const brotli = zlib.brotliCompressSync(content);

    return {
      sdk,
      version,
      raw: content.length,
      gzip: gzipped.length,
      brotli: brotli.length,
    };
  }
}

async function generateAndSaveReport(results, currentVersions) {
  const startTime = Date.now();
  buildTiming.reportGeneration.startTime = startTime;

  console.log("\n📝 Generating HTML report...");

  // Get updated history
  const updatedHistory = await updateHistory(currentVersions, results);

  // Generate and save report with updated history
  fs.writeFileSync(
    "optimization-report.html",
    generateReport(results, updatedHistory)
  );

  buildTiming.reportGeneration.duration = Date.now() - startTime;
  await openReport();
}

async function openReport() {
  const openCommand = getOpenCommand();
  console.log("\n🌐 Attempting to open report in browser...");
  try {
    await execPromise(`${openCommand} optimization-report.html`);
  } catch {
    console.log(
      "Please open optimization-report.html in your browser to view the results."
    );
  }
}

function displayTimingSummary() {
  const totalDuration = buildTiming.total.duration || 0;

  console.log(`\n✨ Total analysis time: ${formatDuration(totalDuration)}`);
  console.log("\nTiming breakdown:");

  Object.entries(buildTiming)
    .filter(([phase]) => phase !== "total")
    .forEach(([phase, data]) => {
      const duration = data.duration || 0;
      const percentage =
        totalDuration > 0
          ? ((duration / totalDuration) * 100).toFixed(1)
          : "0.0";
      console.log(
        `  ${phase}: ${formatDuration(duration)} (${percentage}%) - ${data.description}`
      );
    });

  console.log(
    `  total: ${formatDuration(totalDuration)} - ${buildTiming.total.description}`
  );
}

// Helper function to calculate duration
function calculateDuration(startTime) {
  const duration = Date.now() - startTime;
  return Math.max(0, duration); // Ensure we never return negative values
}

async function analyzeBundles() {
  const analysisStartTime = Date.now();
  buildTiming.total.startTime = analysisStartTime;

  try {
    const currentVersions = await initializeAnalysis();

    // Load existing history at the start
    try {
      if (fs.existsSync(historyPath)) {
        history = JSON.parse(fs.readFileSync(historyPath, "utf8"));
      }
    } catch {
      history = [];
      fs.mkdirSync(path.dirname(historyPath), { recursive: true });
    }

    const existingLevels = Object.keys(OPTIMIZATION_LEVELS).filter((level) =>
      fs.existsSync(`dist/${level}`)
    );

    const selectedLevels =
      existingLevels.length > 0
        ? await handleExistingLevels(existingLevels)
        : await promptForOptimizationLevels([]);

    // Version check timing
    buildTiming.versionCheck.startTime = Date.now();
    await checkVersions();
    buildTiming.versionCheck.duration =
      Date.now() - buildTiming.versionCheck.startTime;

    // Directory setup timing
    buildTiming.directorySetup.startTime = Date.now();
    await setupDirectories(currentVersions);
    buildTiming.directorySetup.duration =
      Date.now() - buildTiming.directorySetup.startTime;

    // Analysis timing
    buildTiming.analysis.startTime = Date.now();
    console.log("\n📊 Analyzing bundle sizes...");

    const results = {};
    const sdks = ["coinbase", "metamask", "walletconnect"];

    for (const level of Object.keys(OPTIMIZATION_LEVELS)) {
      if (!fs.existsSync(`dist/${level}`)) continue;
      results[level] = await analyzeLevelBundles(level, currentVersions, sdks);
    }
    buildTiming.analysis.duration = Date.now() - buildTiming.analysis.startTime;

    // Report generation timing
    buildTiming.reportGeneration.startTime = Date.now();
    await generateAndSaveReport(results, currentVersions);
    buildTiming.reportGeneration.duration =
      Date.now() - buildTiming.reportGeneration.startTime;

    // Calculate total duration only once at the end
    buildTiming.total.duration = Date.now() - analysisStartTime;

    // Call displayTimingSummary only once
    displayTimingSummary();
  } catch (error) {
    console.error(chalk.red("\n❌ Error during analysis:"), error);
  }
}

function getOpenCommand() {
  if (process.platform === "win32") {
    return "start";
  }
  if (process.platform === "darwin") {
    return "open";
  }

  return "xdg-open";
}

function generateLevelCard(level, info, levelResults, allResults) {
  // Calculate size differences from development level if not in development
  const rows = levelResults
    .map((result) => {
      let diffHtml = "";

      if (level !== "development") {
        const devResult = allResults.development.find(
          (r) => r.sdk === result.sdk
        );

        if (devResult) {
          const brotliDiff = (
            ((result.brotli - devResult.brotli) / devResult.brotli) *
            100
          ).toFixed(1);
          const diffClass = brotliDiff < 0 ? "size-improved" : "size-degraded";

          diffHtml = `<span class="size-diff ${diffClass}">(${
            brotliDiff > 0 ? "+" : ""
          }${brotliDiff}%)</span>`;
        }
      }

      return `
        <tr>
          <td>${result.sdk}</td>
          <td class="size-cell">${formatBytes(result.raw)}</td>
          <td class="size-cell">${formatBytes(result.gzip)}</td>
          <td class="size-cell">${formatBytes(result.brotli)} ${diffHtml}</td>
        </tr>
      `;
    })
    .join("");

  return `
      <div class="level-card">
        <div class="level-name">${info.name}</div>
        <div class="level-description">${info.description}</div>
        
        <table>
          <tr>
            <th>SDK</th>
            <th>Raw Size</th>
            <th>Gzip Size</th>
            <th>Brotli Size</th>
          </tr>
          ${rows}
        </table>
  
        <div class="optimization-details">
          <h3>Optimization Settings:</h3>
          <ul>
            <li>Source Maps: ${
              info.config.sourcemap ? "Enabled" : "Disabled"
            }</li>
            <li>Tree Shaking: <pre>${JSON.stringify(
              info.config.treeshake,
              null,
              2
            )}</pre></li>
            <li>Babel Settings: <pre>${JSON.stringify(
              info.config.babel.presets[0][1],
              null,
              2
            )}</pre></li>
            <li>Terser: ${
              info.config.terser
                ? `<pre>${JSON.stringify(info.config.terser, null, 2)}</pre>`
                : "Disabled"
            }</li>
          </ul>
        </div>
      </div>
    `;
}

function generateReport(results, history) {
  const versions = getPackageVersions();

  // Reorganize history by SDK
  const sdkHistory = {
    coinbase: [],
    metamask: [],
    walletconnect: [],
  };

  // Process history entries
  history.forEach((entry) => {
    Object.entries(entry.versions).forEach(([sdk, version]) => {
      if (entry.results) {
        const sdkResults = {};
        Object.entries(entry.results).forEach(([level, levelResults]) => {
          const sdkResult = levelResults.find((r) => r.sdk === sdk);
          if (sdkResult) {
            sdkResults[level] = sdkResult;
          }
        });

        if (Object.keys(sdkResults).length > 0) {
          sdkHistory[sdk].push({
            timestamp: entry.timestamp,
            version,
            results: sdkResults,
          });
        }
      }
    });
  });

  // Sort entries by timestamp and take last 5 for each SDK
  Object.keys(sdkHistory).forEach((sdk) => {
    sdkHistory[sdk].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    sdkHistory[sdk] = sdkHistory[sdk].slice(0, 5);
  });

  // Add compression explanation section
  const compressionExplanation = `
    <div class="compression-info">
      <h2>Bundle Size Measurements</h2>
      <ul>
        <li><strong>Raw Size:</strong> The original, uncompressed bundle size</li>
        <li><strong>Gzip Size:</strong> Size after Gzip compression (widely supported, standard compression)</li>
        <li><strong>Brotli Size:</strong> Size after Brotli compression (modern, more efficient compression)
          <ul>
            <li>Typically 15-25% smaller than Gzip</li>
            <li>Supported by all modern browsers</li>
            <li>Used as the primary comparison metric</li>
          </ul>
        </li>
      </ul>
    </div>
  `;

  // Generate report HTML without timing section
  const reportContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Bundle Optimization Analysis</title>
        ${generateReportStyles()}
      </head>
      <body>
        <h1>Bundle Optimization Analysis</h1>
        ${generateVersionInfo(versions)}
        ${compressionExplanation}
        ${generateHistorySection(sdkHistory)}
        ${generateCurrentResults(results, OPTIMIZATION_LEVELS)}
      </body>
    </html>
  `;

  return reportContent;
}

// Update the historyPath to use path.join
const historyPath = path.join("stats", "version-history.json");
let history = [];

async function updateHistory(currentVersions, results) {
  try {
    // Ensure we have the stats directory
    fs.mkdirSync("stats", { recursive: true });

    // Load existing history
    let history = [];
    try {
      if (fs.existsSync(historyPath)) {
        const historyData = fs.readFileSync(historyPath, "utf8");
        history = JSON.parse(historyData);
      }
    } catch (error) {
      console.log(chalk.yellow("\n⚠️  Starting fresh history"));
    }

    const newEntry = {
      timestamp: new Date().toISOString(),
      versions: { ...currentVersions },
      results: {},
    };

    // Format results by optimization level
    Object.keys(OPTIMIZATION_LEVELS).forEach((level) => {
      if (results[level] && Array.isArray(results[level])) {
        newEntry.results[level] = results[level].map((result) => ({
          sdk: result.sdk,
          version: result.version,
          raw: result.raw,
          gzip: result.gzip,
          brotli: result.brotli,
        }));
      }
    });

    // Check if we already have an entry with these versions
    const hasMatchingVersions = history.some((entry) =>
      Object.entries(currentVersions).every(
        ([pkg, version]) => entry.versions[pkg] === version
      )
    );

    if (!hasMatchingVersions) {
      history.push(newEntry);
      history = history.slice(-30); // Keep last 30 entries

      // Write the updated history
      fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
      console.log(chalk.green("\n✓ Version history updated"));
    } else {
      console.log(
        chalk.yellow("\n⚠️  Skipping history update - versions unchanged")
      );
    }

    return history;
  } catch (error) {
    console.error(chalk.red("\n❌ Error updating history:"), error);
    console.error(error);
    return [];
  }
}

function generateReportStyles() {
  return `
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background: #f5f5f5;
      }
      
      h1, h2, h3 {
        color: #2c3e50;
      }
      
      .level-card {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .level-name {
        font-size: 1.5em;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 10px;
      }
      
      .level-description {
        color: #666;
        margin-bottom: 20px;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      
      th {
        background: #f8f9fa;
        font-weight: 600;
      }
      
      .size-cell {
        font-family: monospace;
        text-align: right;
      }
      
      .size-diff {
        margin-left: 8px;
        font-size: 0.9em;
      }
      
      .size-improved {
        color: #2ecc71;
      }
      
      .size-degraded {
        color: #e74c3c;
      }
      
      .compression-info {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .compression-info ul {
        margin: 10px 0;
        padding-left: 20px;
      }
      
      .compression-info ul ul {
        margin: 5px 0;
        color: #666;
      }
      
      .compression-info li {
        margin: 5px 0;
      }
        
      .optimization-details {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #eee;
      }
      
      .optimization-details h3 {
        margin-top: 0;
      }
      
      .optimization-details ul {
        list-style: none;
        padding: 0;
      }
      
      .optimization-details li {
        margin: 10px 0;
      }
      
      pre {
        background: #f8f9fa;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
      }
      
      .sdk-history {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .version-info {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
    </style>
  `;
}

function generateVersionInfo(versions) {
  // Find standard level results from the most recent build
  const standardResults = history[history.length - 1]?.results?.standard || [];

  return `
    <div class="version-info">
      <h2>Current SDK Versions</h2>
      <table>
        <tr>
          <th>SDK</th>
          <th>Version</th>
          <th>Standard Build Size (Brotli)</th>
        </tr>
        ${Object.entries(versions)
          .map(([sdk, version]) => {
            const sdkResult = standardResults.find((r) => r.sdk === sdk);
            const size = sdkResult ? formatBytes(sdkResult.brotli) : "N/A";
            return `
                <tr>
                  <td>${sdk}</td>
                  <td>${version}</td>
                  <td class="size-cell">${size}</td>
                </tr>
              `;
          })
          .join("")}
      </table>
    </div>
  `;
}

function generateHistorySection(sdkHistory) {
  return `
    <div class="history-section">
      <h2>Historical Data by SDK</h2>
      ${Object.entries(sdkHistory)
        .map(
          ([sdk, entries]) => `
        <div class="sdk-history">
          <h3>${sdk.charAt(0).toUpperCase() + sdk.slice(1)}</h3>
          ${
            entries.length > 0
              ? `
            <table>
              <tr>
                <th>Date</th>
                <th>Version</th>
                ${Object.keys(OPTIMIZATION_LEVELS)
                  .map(
                    (level) => `
                  <th>${level} (Brotli)</th>
                `
                  )
                  .join("")}
              </tr>
              ${entries
                .map(
                  (entry) => `
                <tr>
                  <td>${new Date(entry.timestamp).toLocaleDateString()}</td>
                  <td>${entry.version}</td>
                  ${Object.keys(OPTIMIZATION_LEVELS)
                    .map((level) => {
                      const result = entry.results[level];
                      return `<td class="size-cell">${
                        result ? formatBytes(result.brotli) : "N/A"
                      }</td>`;
                    })
                    .join("")}
                </tr>
              `
                )
                .join("")}
            </table>
          `
              : "<p>No historical data available</p>"
          }
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

function generateCurrentResults(results, optimizationLevels) {
  return `
    <div class="current-results">
      <h2>Current Analysis</h2>
      ${Object.entries(optimizationLevels)
        .map(([level, info]) =>
          generateLevelCard(level, info, results[level] || [], results)
        )
        .join("")}
    </div>
  `;
}

export { analyzeBundles, generateConfigs };
