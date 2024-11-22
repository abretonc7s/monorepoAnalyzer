#!/usr/bin/env node
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { execSync } from "child_process";
import fs from "fs";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { rollup, type OutputOptions, type RollupOptions } from "rollup";
import { visualizer } from "rollup-plugin-visualizer";

interface PackageConfig {
  path: string;
  isLocal: boolean;
  name: string;
}

interface AnalysisRecord {
  packageName: string;
  version: string;
  timestamp: number;
  reportPath: string;
}

interface PackageJson {
  name: string;
  version: string;
  module?: string;
  main?: string;
  browser?: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

interface PackageCache {
  packageName: string;
  version: string;
  path: string;
  timestamp: number;
}

async function analyzePackage(
  packageInput: string,
  force: boolean = false,
): Promise<void> {
  const tempDir = path.join(process.cwd(), "temp-analysis");
  const outputDir = path.join(process.cwd(), "analysis-output");

  const packageConfig: PackageConfig = await resolvePackageConfig(packageInput);

  console.log(`\n📦 Starting analysis for package: ${packageConfig.name}`);
  console.log("📂 Using directories:");
  console.log(`   Temp: ${tempDir}`);
  console.log(`   Output: ${outputDir}`);
  console.log(
    `   ${packageConfig.isLocal ? "📍 Local package" : "🌐 NPM package"}: ${packageConfig.path}`,
  );

  try {
    // Create directories
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
      console.log("📁 Created temporary directory");
    }
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
      console.log("📁 Created output directory");
    }

    // Handle local vs npm package
    if (packageConfig.isLocal) {
      console.log("🔍 Analyzing local package...");
      await prepareLocalPackage(tempDir, packageConfig.path);
    } else {
      console.log("🔍 Analyzing npm package...");
      await prepareNpmPackage(tempDir, packageConfig.name, force);
    }

    // Get package version
    const version = await getPackageVersion(tempDir, packageConfig.name);

    console.log(`📌 Package version: ${version}`);

    const reportPath = path.join(
      outputDir,
      `${packageConfig.name.replace("/", "-")}-stats.html`,
    );

    console.log("⚙️  Configuring build process...");
    const inputOptions: RollupOptions = {
      input: path.join(tempDir, "entry.js"),
      preserveEntrySignatures: "strict",
      treeshake: {
        moduleSideEffects: true,
        propertyReadSideEffects: true,
        tryCatchDeoptimization: false,
      },
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
        commonjs({
          transformMixedEsModules: true,
          sourceMap: true,
        }),
        terser({
          mangle: false,
          compress: false,
          format: {
            beautify: true,
            comments: "all",
          },
        }),
        visualizer({
          filename: reportPath,
          gzipSize: true,
          brotliSize: true,
          sourcemap: true,
          open: true,
          title: `${packageConfig.name}@${version} Dependency Analysis`,
          template: "treemap",
          projectRoot: tempDir,
          exclude: [
            {
              file: "**/node_modules/!(socket.io-client|@metamask/*|bowser|cross-fetch|debug|eciesjs|eth-rpc-errors|eventemitter2|i18next|obj-multiplex|pump|qrcode-terminal-nooctal|readable-stream|uuid)/**",
              bundle: undefined,
            },
          ],
        }),
      ],
    };

    const outputOptions: OutputOptions = {
      dir: outputDir,
      format: "es",
      preserveModules: true,
      preserveModulesRoot: tempDir,
      entryFileNames: "[name].js",
      chunkFileNames: "chunks/[name]-[hash].js",
      sourcemap: true,
    };

    // Build bundle
    console.log("🔨 Building and analyzing bundle...");
    const bundle = await rollup(inputOptions);

    console.log("📊 Generating size analysis...");
    await bundle.write(outputOptions);
    await bundle.close();

    // Save analysis record
    await saveAnalysisHistory({
      packageName: packageConfig.name,
      version,
      timestamp: Date.now(),
      reportPath,
    });

    console.log("\n✅ Analysis complete!");
    console.log("📊 Analysis report details:");
    console.log(`   Package: ${packageConfig.name}`);
    console.log(`   Version: ${version}`);
    console.log(`   Report: ${reportPath}`);

    // Try to open the report
    const openCommand =
      process.platform === "win32"
        ? "start"
        : process.platform === "darwin"
          ? "open"
          : "xdg-open";

    console.log("\n🌐 Opening report in browser...");
    execSync(`${openCommand} "${reportPath}"`, { stdio: "ignore" });

    // Add cache cleanup logic
    const caches = await getCachedPackages();
    const now = Date.now();
    const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

    const oldCaches = caches.filter((cache) => now - cache.timestamp > maxAge);

    if (oldCaches.length > 0) {
      console.log("\n🧹 Cleaning up old cache entries...");
      for (const cache of oldCaches) {
        if (fs.existsSync(cache.path)) {
          fs.rmSync(cache.path, { recursive: true, force: true });
        }
      }

      await saveCacheIndex(
        caches.filter((cache) => now - cache.timestamp <= maxAge),
      );
      console.log(`✨ Removed ${oldCaches.length} old cache entries`);
    }
  } catch (error) {
    console.error("\n❌ Error during analysis:");
    console.error(error instanceof Error ? error.message : String(error));
    if (error instanceof Error && error.stack) {
      console.error("\nStack trace:");
      console.error(error.stack);
    }
  } finally {
    console.log("\n🧹 Cleaning up temporary files...");
    fs.rmSync(tempDir, { recursive: true, force: true });
    console.log("✨ Done!");
  }
}

async function resolvePackageConfig(input: string): Promise<PackageConfig> {
  const isLocal = fs.existsSync(path.resolve(input));

  if (isLocal) {
    const packageJsonPath = path.join(path.resolve(input), "package.json");

    if (!fs.existsSync(packageJsonPath)) {
      throw new Error("Local directory must contain a package.json file");
    }
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    return {
      path: path.resolve(input),
      isLocal: true,
      name: packageJson.name,
    };
  }

  return {
    path: input,
    isLocal: false,
    name: input,
  };
}

async function prepareLocalPackage(
  tempDir: string,
  packagePath: string,
): Promise<void> {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(packagePath, "package.json"), "utf-8"),
    ) as PackageJson;
    const packageName = packageJson.name;

    // Handle scoped packages correctly
    let targetPath: string;

    if (packageName.startsWith("@")) {
      const [scope, name] = packageName.split("/");
      const scopeDir = path.join(tempDir, "node_modules", scope);

      fs.mkdirSync(scopeDir, { recursive: true });
      targetPath = path.join(scopeDir, name);
    } else {
      targetPath = path.join(tempDir, "node_modules", packageName);
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    }

    console.log(`📦 Setting up package: ${packageName}`);
    fs.mkdirSync(targetPath, { recursive: true });

    // Copy package.json
    console.log("📄 Copying package.json");
    fs.copyFileSync(
      path.join(packagePath, "package.json"),
      path.join(targetPath, "package.json"),
    );

    // Determine which distribution file to use
    const distFile =
      packageJson.module || packageJson.main || packageJson.browser;

    if (!distFile) {
      throw new Error("No distribution file found in package.json");
    }

    console.log(`📦 Using distribution file: ${distFile}`);

    // Create directory structure for dist file
    const distPath = path.join(targetPath, path.dirname(distFile));

    fs.mkdirSync(distPath, { recursive: true });

    // Copy dist file
    const sourceDistFile = path.join(packagePath, distFile);
    const targetDistFile = path.join(targetPath, distFile);

    if (!fs.existsSync(sourceDistFile)) {
      throw new Error(`Distribution file not found: ${sourceDistFile}`);
    }

    console.log("📄 Copying distribution file");
    fs.copyFileSync(sourceDistFile, targetDistFile);

    // Create entry point file
    const entryContent = `
      import pkg from '${packageName}';
      export default pkg;
    `;

    fs.writeFileSync(path.join(tempDir, "entry.js"), entryContent);

    // Create minimal package.json in temp directory
    fs.writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify(
        {
          name: "temp-analysis",
          version: "1.0.0",
          type: "module",
          dependencies: {
            [packageName]: "*",
          },
        },
        null,
        2,
      ),
    );

    console.log("\n📦 Package setup complete:");
    console.log(`   Package: ${packageName}`);
    console.log(`   Source: ${packagePath}`);
    console.log(`   Target: ${targetPath}`);
    console.log(`   Dist file: ${distFile}`);

    // Install only necessary dependencies
    console.log("\n📦 Installing dependencies...");
    execSync("npm install --production", {
      cwd: tempDir,
      stdio: "inherit",
    });
  } catch (error) {
    throw new Error(
      `Failed to prepare local package. ` +
        `Error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

async function prepareNpmPackage(
  tempDir: string,
  packageName: string,
  force: boolean = false,
): Promise<void> {
  try {
    // Get the latest version first
    const version = await getLatestPackageVersion(packageName);

    // Check cache before installing
    if (!force) {
      const cachedPath = await getCachedPackage(packageName, version);

      if (cachedPath) {
        console.log("📦 Found cached package installation");
        const useCache = await askForConfirmation("Use cached version? (Y/n) ");

        if (useCache) {
          console.log("📦 Using cached version...");
          fs.cpSync(cachedPath, path.join(tempDir, "node_modules"), {
            recursive: true,
          });
          console.log("📦 Copied from cache");

          // Create entry point file
          const entryContent = `
            import pkg from '${packageName}';
            export default pkg;
          `;

          fs.writeFileSync(path.join(tempDir, "entry.js"), entryContent);

          return;
        }
        console.log("📦 Skipping cache, performing fresh install...");
      }
    } else {
      console.log("📦 Force flag set, skipping cache check...");
    }

    // Create minimal package.json
    fs.writeFileSync(
      path.join(tempDir, "package.json"),
      JSON.stringify({
        name: "temp-analysis",
        version: "1.0.0",
        type: "module",
      }),
    );

    // Install specific version
    console.log(`📥 Installing ${packageName}@${version}...`);
    execSync(`npm install ${packageName}@${version}`, {
      cwd: tempDir,
      stdio: "inherit",
    });

    // Create entry point file
    const entryContent = `
      import pkg from '${packageName}';
      export default pkg;
    `;

    fs.writeFileSync(path.join(tempDir, "entry.js"), entryContent);

    // Cache the newly installed package
    const cacheDir = await getCacheDirectory();
    const packageCachePath = path.join(
      cacheDir,
      `${packageName.replace("/", "-")}-${version}`,
    );

    fs.cpSync(path.join(tempDir, "node_modules"), packageCachePath, {
      recursive: true,
    });
    await addPackageToCache(packageName, version, packageCachePath);
    console.log("📦 Added package to cache");
  } catch (error) {
    throw new Error(
      `Failed to install package ${packageName}. ` +
        `Error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

// Add this function to handle analysis history
async function getAnalysisHistory(): Promise<AnalysisRecord[]> {
  const historyPath = path.join(process.cwd(), "analysis-history.json");

  try {
    const data = await readFile(historyPath, "utf-8");

    return JSON.parse(data) as AnalysisRecord[];
  } catch {
    return [];
  }
}

async function saveAnalysisHistory(record: AnalysisRecord): Promise<void> {
  const historyPath = path.join(process.cwd(), "analysis-history.json");
  const history = await getAnalysisHistory();

  history.push(record);
  await writeFile(historyPath, JSON.stringify(history, null, 2));
}

// Update getPackageVersion to handle the minimal file structure
async function getPackageVersion(
  tempDir: string,
  packageName: string,
): Promise<string> {
  const packageJsonPath = path.join(
    tempDir,
    "node_modules",
    packageName.replace("/", path.sep),
    "package.json",
  );

  try {
    console.log(`🔍 Reading package.json from: ${packageJsonPath}`);
    const packageJson = JSON.parse(
      await readFile(packageJsonPath, "utf-8"),
    ) as PackageJson;

    console.log(`✅ Found version: ${packageJson.version}`);

    return packageJson.version;
  } catch (error) {
    throw new Error(
      `Failed to read package.json for ${packageName}. ` +
        `Error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

// Helper function to ask for user confirmation
function askForConfirmation(question: string): Promise<boolean> {
  return new Promise((resolve) => {
    process.stdout.write(question);
    process.stdin.once("data", (data) => {
      const response = data.toString().trim().toLowerCase();

      // Default to true if empty response
      resolve(response === "" || response === "y" || response === "yes");
    });
  });
}

// Update the CLI interface
const packageInput = process.argv[2];
const force = process.argv.includes("--force") || process.argv.includes("-f");

if (!packageInput) {
  console.error("❌ Please provide a package name or local path");
  console.log(
    "Usage: node analyze-package.js <package-name-or-path> [--force]",
  );
  process.exit(1);
}

analyzePackage(packageInput, force);

// Add cache management functions
async function getCacheDirectory(): Promise<string> {
  const cacheDir = path.join(process.cwd(), ".package-cache");

  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }

  return cacheDir;
}

async function getCachedPackages(): Promise<PackageCache[]> {
  const cacheFile = path.join(await getCacheDirectory(), "cache-index.json");

  try {
    const data = await readFile(cacheFile, "utf-8");

    return JSON.parse(data) as PackageCache[];
  } catch {
    return [];
  }
}

async function saveCacheIndex(caches: PackageCache[]): Promise<void> {
  const cacheFile = path.join(await getCacheDirectory(), "cache-index.json");

  await writeFile(cacheFile, JSON.stringify(caches, null, 2));
}

async function getCachedPackage(
  packageName: string,
  version: string,
): Promise<string | null> {
  const caches = await getCachedPackages();
  const cached = caches.find(
    (cache) => cache.packageName === packageName && cache.version === version,
  );

  if (cached && fs.existsSync(cached.path)) {
    // Check if cache is older than 7 days
    const cacheAge = Date.now() - cached.timestamp;
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    if (cacheAge > maxAge) {
      console.log("📦 Cache is older than 7 days, will reinstall");

      return null;
    }

    return cached.path;
  }

  return null;
}

async function addPackageToCache(
  packageName: string,
  version: string,
  packagePath: string,
): Promise<void> {
  const caches = await getCachedPackages();

  // Remove old cache entry if exists
  const index = caches.findIndex(
    (cache) => cache.packageName === packageName && cache.version === version,
  );

  if (index !== -1) {
    caches.splice(index, 1);
  }

  caches.push({
    packageName,
    version,
    path: packagePath,
    timestamp: Date.now(),
  });

  await saveCacheIndex(caches);
}

// Add new function to fetch package version without installing
async function getLatestPackageVersion(packageName: string): Promise<string> {
  console.log(`📡 Fetching latest version for ${packageName}...`);
  try {
    const result = execSync(`npm view ${packageName} version`, {
      encoding: "utf-8",
    }).trim();

    console.log(`📌 Latest version: ${result}`);

    return result;
  } catch (error) {
    throw new Error(
      `Failed to fetch version for ${packageName}. ` +
        `Error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
