import chalk from "chalk";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { rollup } from "rollup";
import { promisify } from "util";
import { brotliCompressSync, gzipSync } from "zlib";
import { OPTIMIZATION_LEVELS, SDK_CONFIGS } from "./config";
import { generateReport } from "./report";
import { createConfig } from "./rollup-config";
import { AnalyzerOptions, BundleAnalysis, HistoryEntry } from "./types";
import {
  formatBytes,
  formatDuration,
  getPackageVersions,
  promptForOptimizationLevels,
  promptUser,
} from "./utils";

const execPromise = promisify(exec);

const HISTORY_PATH = path.resolve(process.cwd(), "stats/version-history.json");

let history: HistoryEntry[] = [];

async function handleExistingLevels(
  existingLevels: string[],
): Promise<string[]> {
  console.log(
    `\n📦 ${chalk.blue("Found existing builds for:")} ${chalk.green(existingLevels.join(", "))}`,
  );

  const rebuildAll = await promptUser({
    question: "Would you like to rebuild any levels?",
    defaultValue: "n",
  });

  if (rebuildAll) {
    return await promptForOptimizationLevels(existingLevels);
  }

  return [];
}

async function loadHistory(historyPath: string): Promise<HistoryEntry[]> {
  if (fs.existsSync(historyPath)) {
    return JSON.parse(fs.readFileSync(historyPath, "utf-8"));
  }

  return [];
}

async function determineSelectedLevels(
  options: AnalyzerOptions,
): Promise<{ buildLevels: string[]; analyzeLevels: string[] }> {
  // Early returns for specific options
  if (options.selectedLevels) {
    return {
      buildLevels: options.selectedLevels,
      analyzeLevels: options.selectedLevels,
    };
  }

  if (options.skipPrompts || options.forceRebuild) {
    const allLevels = Object.keys(OPTIMIZATION_LEVELS);

    return {
      buildLevels: allLevels,
      analyzeLevels: allLevels,
    };
  }

  const allLevels = Object.keys(OPTIMIZATION_LEVELS);

  console.log("\n📂 Checking all optimization levels:", allLevels);
  console.log("📁 Current working directory:", process.cwd());

  // Check all levels for existing builds
  const existingLevels: string[] = [];

  // Check each optimization level from the config
  for (const level of allLevels) {
    const levelPath = path.resolve(process.cwd(), "dist", level);

    console.log(`\n🔍 Checking level: ${level}`);
    console.log(`  📁 Path: ${levelPath}`);

    if (!fs.existsSync(levelPath)) {
      console.log(`  ❌ Level directory doesn't exist`);
      continue;
    }

    // List all contents of the level directory
    const levelContents = fs.readdirSync(levelPath);

    console.log(`  📑 Level directory contents:`, levelContents);

    let hasValidBundle = false;
    const foundBundles: string[] = [];

    // Check if any SDK has builds in this level
    for (const sdk of SDK_CONFIGS) {
      const name = path.basename(sdk.output, ".js").toLowerCase();
      const sdkPath = path.join(levelPath, name);

      if (!fs.existsSync(sdkPath)) {
        console.log(`  📦 Checking SDK: ${name}`);
        console.log(`    📁 Path: ${sdkPath}`);
        console.log(`    ❌ SDK directory doesn't exist`);
        continue;
      }

      const versionDirs = fs.readdirSync(sdkPath);

      console.log(`  📦 Checking SDK: ${name}`);
      console.log(`    📁 Path: ${sdkPath}`);
      console.log(`    📂 Version directories: ${versionDirs.join(", ")}`);

      for (const version of versionDirs) {
        const bundlePath = path.resolve(sdkPath, version, sdk.output);

        console.log(`    🔍 Checking bundle: ${bundlePath}`);

        if (fs.existsSync(bundlePath)) {
          console.log(`    ✅ Found valid bundle`);
          hasValidBundle = true;
          foundBundles.push(`${name}@${version}`);
        }
      }
    }

    if (hasValidBundle) {
      console.log(`  ✅ Level has valid bundles: ${foundBundles.join(", ")}`);
      existingLevels.push(level);
    } else {
      console.log(`  ❌ No valid bundles found in level ${level}`);
    }
  }

  console.log("\n📦 Summary of all found builds:");
  console.log("  Existing levels:", existingLevels);
  console.log("  Total levels found:", existingLevels.length);

  if (existingLevels.length > 0) {
    console.log("\n📦 Summary of existing builds:");
    existingLevels.forEach((level) => {
      console.log(`  - ${level}`);
    });

    const rebuildLevels = await handleExistingLevels(existingLevels);

    return {
      buildLevels: rebuildLevels,
      analyzeLevels: existingLevels,
    };
  }

  // If no existing builds found, build and analyze all levels
  return {
    buildLevels: allLevels,
    analyzeLevels: allLevels,
  };
}

async function analyzeSdkBundle(
  sdk: (typeof SDK_CONFIGS)[number],
  level: string,
  version: string,
): Promise<BundleAnalysis | null> {
  const name = path.basename(sdk.output, ".js").toLowerCase();
  const filePath = path.resolve(
    process.cwd(),
    "dist",
    level,
    name,
    version,
    sdk.output,
  );

  if (!fs.existsSync(filePath)) {
    console.log(chalk.yellow(`    ⚠️  Bundle not found at ${filePath}`));

    return null;
  }

  console.log(chalk.green(`    ✓ Found bundle at ${filePath}`));
  const content = fs.readFileSync(filePath);

  const analysis = {
    sdk: name,
    version,
    raw: content.length,
    gzip: gzipSync(content).length,
    brotli: brotliCompressSync(content).length,
  };

  console.log(
    `    📊 Sizes - Raw: ${formatBytes(analysis.raw)}, Gzip: ${formatBytes(analysis.gzip)}, Brotli: ${formatBytes(analysis.brotli)}`,
  );

  return analysis;
}

async function buildBundle(
  sdk: (typeof SDK_CONFIGS)[number],
  level: string,
  version: string,
): Promise<void> {
  const config = createConfig({
    input: sdk.input,
    output: sdk.output,
    level,
  });

  const bundle = await rollup(config);
  const name = path.basename(sdk.output, ".js").toLowerCase();

  await bundle.write({
    ...config.output,
    file: path.resolve(process.cwd(), "dist", level, name, version, sdk.output),
  });
  await bundle.close();
}

interface TimingMetrics {
  versionCheck: number;
  directorySetup: number;
  bundleBuild: number;
  analysis: number;
  reportGeneration: number;
  historyLoad: number;
  total: number;
}

export async function analyzeBundles(options: AnalyzerOptions): Promise<void> {
  const startTime = Date.now();
  const results: Record<string, BundleAnalysis[]> = {};
  const timings: TimingMetrics = {
    versionCheck: 0,
    directorySetup: 0,
    bundleBuild: 0,
    analysis: 0,
    reportGeneration: 0,
    historyLoad: 0,
    total: 0,
  };

  try {
    const versionCheckStart = Date.now();
    const versions = getPackageVersions();

    timings.versionCheck = Date.now() - versionCheckStart;

    console.log(
      `\n📦 Package versions detected (${formatDuration(timings.versionCheck)}):`,
    );
    Object.entries(versions).forEach(([pkg, version]) => {
      console.log(`  - ${pkg}: ${version}`);
    });

    const historyStart = Date.now();

    history = await loadHistory(HISTORY_PATH);
    timings.historyLoad = Date.now() - historyStart;

    const { buildLevels, analyzeLevels } =
      await determineSelectedLevels(options);

    console.log("\n🔍 Debug Info:");
    console.log("  Build Levels:", buildLevels);
    console.log("  Analyze Levels:", analyzeLevels);

    // Initialize results for all levels
    analyzeLevels.forEach((level) => {
      results[level] = [];
    });

    console.log("\n📦 Build Phase:");
    console.log("  Levels to build:", buildLevels.join(", "));

    // Build bundles
    for (const level of buildLevels) {
      console.log(
        `\n🔨 Building ${level.charAt(0).toUpperCase() + level.slice(1)} bundles...`,
      );

      const levelDir = path.resolve(process.cwd(), "dist", level);

      if (!fs.existsSync(levelDir)) {
        fs.mkdirSync(levelDir, { recursive: true });
      }

      for (const sdk of SDK_CONFIGS) {
        const name = path.basename(sdk.output, ".js").toLowerCase();
        const version = versions[name as keyof typeof versions];

        if (!version) {
          console.log(chalk.yellow(`    ⚠️  No version found for ${name}`));
          continue;
        }

        const sdkVersionDir = path.resolve(levelDir, name, version);

        if (!fs.existsSync(sdkVersionDir)) {
          fs.mkdirSync(sdkVersionDir, { recursive: true });
        }

        const bundlePath = path.resolve(sdkVersionDir, sdk.output);

        if (!fs.existsSync(bundlePath) || buildLevels.includes(level)) {
          console.log(`    🔨 Building ${name} for ${level}...`);
          await buildBundle(sdk, level, version);
        }
      }
    }

    console.log("\n📊 Analysis Phase:");
    console.log("  Levels to analyze:", analyzeLevels.join(", "));

    // Analyze all levels
    for (const level of analyzeLevels) {
      console.log(
        `\n📏 Analyzing ${level.charAt(0).toUpperCase() + level.slice(1)} bundles...`,
      );

      for (const sdk of SDK_CONFIGS) {
        const name = path.basename(sdk.output, ".js").toLowerCase();
        const version = versions[name as keyof typeof versions];

        if (!version) continue;

        const analysis = await analyzeSdkBundle(sdk, level, version);

        if (analysis) {
          results[level].push(analysis);
        }
      }
    }

    const setupStart = Date.now();

    console.log("\n📁 Creating output directories...");
    // Add directory creation logic here if needed
    timings.directorySetup = Date.now() - setupStart;
    console.log(
      `✓ Directories created (${formatDuration(timings.directorySetup)})`,
    );

    console.log("\n📊 Analyzing bundle sizes...");
    const analysisStart = Date.now();

    const bundleBuildStart = Date.now();

    console.log(
      `✓ ${analyzeLevels[0].charAt(0).toUpperCase() + analyzeLevels[0].slice(1)} analysis completed (${formatDuration(Date.now() - startTime)})`,
    );
    timings.bundleBuild = Date.now() - bundleBuildStart;

    timings.analysis = Date.now() - analysisStart;

    console.log("\n📋 Report Generation:");
    console.log(
      "  Available results for levels:",
      Object.keys(results).join(", "),
    );
    console.log("  Number of analyses per level:");
    Object.entries(results).forEach(([level, analyses]) => {
      console.log(`    ${level}: ${analyses.length} SDKs`);
    });

    console.log("\n📝 Generating HTML report...");
    const reportStart = Date.now();

    const newEntry: HistoryEntry = {
      timestamp: new Date().toISOString(),
      versions,
      results,
    };

    const hasMatchingEntry = history.some((entry) => {
      // First check versions match
      const versionsMatch = Object.entries(versions).every(
        ([pkg, version]) =>
          entry.versions[pkg as keyof typeof versions] === version,
      );

      if (!versionsMatch) return false;

      // Then check if results match for each level
      return Object.entries(results).every(([level, levelResults]) => {
        const entryLevelResults = entry.results[level];

        if (!entryLevelResults) return false;

        return levelResults.every((result) => {
          const matchingResult = entryLevelResults.find(
            (r) => r.sdk === result.sdk,
          );

          return (
            matchingResult &&
            matchingResult.raw === result.raw &&
            matchingResult.gzip === result.gzip &&
            matchingResult.brotli === result.brotli
          );
        });
      });
    });

    if (!hasMatchingEntry) {
      history.push(newEntry);
      history = history.slice(-30); // Keep last 30 entries
      fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
      console.log(chalk.green("\n✓ Version history updated"));
    } else {
      console.log(
        chalk.yellow("\n⚠️  Skipping history update - identical entry exists"),
      );
    }

    const reportContent = generateReport({
      results,
      history,
      versions,
      buildDuration: Date.now() - startTime,
    });

    fs.writeFileSync(
      path.resolve(process.cwd(), "optimization-report.html"),
      reportContent,
    );

    timings.reportGeneration = Date.now() - reportStart;
    timings.total = Date.now() - startTime;

    console.log("\n✨ Total analysis time:", formatDuration(timings.total));
    console.log("\nTiming breakdown:");
    Object.entries(timings).forEach(([key, duration]) => {
      const percentage = ((duration / timings.total) * 100).toFixed(1);
      const description = getTimingDescription(key as keyof TimingMetrics);

      console.log(
        `  ${key}: ${formatDuration(duration)} (${percentage}%) - ${description}`,
      );
    });

    const reportPath = path.resolve(process.cwd(), "optimization-report.html");

    await openReport(reportPath);
  } catch (error) {
    console.error(chalk.red("\n❌ Error during analysis:"), error);
    throw error;
  }
}

function getTimingDescription(key: keyof TimingMetrics): string {
  const descriptions: Record<keyof TimingMetrics, string> = {
    versionCheck: "Time spent checking SDK versions",
    directorySetup: "Time spent creating output directories",
    bundleBuild: "Time spent building bundles with Rollup",
    analysis: "Time spent analyzing bundle sizes",
    reportGeneration: "Time spent generating HTML report",
    historyLoad: "Time spent loading version history",
    total: "Total execution time",
  };

  return descriptions[key];
}

async function openReport(reportPath: string): Promise<void> {
  const platform = process.platform;
  let openCommand = "xdg-open"; // default for Linux

  if (platform === "darwin") {
    openCommand = "open";
  } else if (platform === "win32") {
    openCommand = "start";
  }

  console.log("\n🌐 Attempting to open report in browser...");
  try {
    await execPromise(`${openCommand} ${reportPath}`);
  } catch {
    console.log(
      "\nPlease open optimization-report.html in your browser to view the results.",
    );
  }
}
