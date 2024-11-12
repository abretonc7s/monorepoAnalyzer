import { exec } from "child_process";
import fs from "fs-extra";
import path from "path";
import { repositories } from "./types/repositories";

interface BuildSize {
  size: number;
  gzippedSize: number;
  format: string;
  path: string;
}

interface SizeResult {
  repoName: string;
  packageName: string;
  coreSdkSize?: BuildSize;
  utilsSize?: BuildSize;
  reactSize?: BuildSize;
}

async function getFileSize(
  filePath: string,
): Promise<{ size: number; gzippedSize: number }> {
  const content = await fs.readFile(filePath);
  const size = content.length;

  return new Promise((resolve, reject) => {
    exec(`gzip -c "${filePath}" | wc -c`, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          size: size / 1024, // Convert to KB
          gzippedSize: parseInt(stdout.trim(), 10) / 1024, // Convert to KB
        });
      }
    });
  });
}

async function findBrowserBuild(
  packagePath: string,
): Promise<BuildSize | undefined> {
  const distPath = path.join(packagePath, "dist");

  if (!fs.existsSync(distPath)) return undefined;

  const buildPriority = [
    { pattern: "browser/es/", format: "ES Modules" },
    { pattern: "browser/umd/", format: "UMD" },
    { pattern: "es/", format: "ES Modules" },
    { pattern: "umd/", format: "UMD" },
  ];

  for (const { pattern, format } of buildPriority) {
    const files = await fs.readdir(distPath, { recursive: true });
    const browserFile = files.find(
      (file) =>
        typeof file === "string" &&
        file.endsWith(".js") &&
        file.includes(pattern),
    );

    if (browserFile && typeof browserFile === "string") {
      const filePath = path.join(distPath, browserFile);
      const { size, gzippedSize } = await getFileSize(filePath);

      return { size, gzippedSize, format, path: browserFile };
    }
  }

  return undefined;
}

export async function analyzeSizeLimits(): Promise<void> {
  const results: SizeResult[] = [];

  for (const repo of repositories) {
    console.log(`\nAnalyzing ${repo.repoName}...`);
    const result: SizeResult = {
      repoName: repo.repoName,
      packageName: repo.repoName,
    };

    // Find core SDK package
    const corePackage = repo.packages.find(
      (pkg) =>
        pkg.name.includes("sdk") ||
        pkg.name.includes("core") ||
        pkg.name === "wallet-sdk",
    );

    if (corePackage) {
      result.coreSdkSize = await findBrowserBuild(
        path.join(repo.baseDirectory, corePackage.path),
      );
    }

    // Find utils package
    const utilsPackage = repo.packages.find(
      (pkg) => pkg.name.includes("utils") || pkg.name.includes("communication"),
    );

    if (utilsPackage) {
      result.utilsSize = await findBrowserBuild(
        path.join(repo.baseDirectory, utilsPackage.path),
      );
    }

    // Find React package
    const reactPackage = repo.packages.find((pkg) =>
      pkg.name.includes("react"),
    );

    if (reactPackage) {
      result.reactSize = await findBrowserBuild(
        path.join(repo.baseDirectory, reactPackage.path),
      );
    }

    results.push(result);
  }

  // Print comparison table
  console.log("\n=== SDK Size Comparison (Browser Builds) ===\n");

  console.log("Core SDK Sizes:");
  results.forEach((result) => {
    if (result.coreSdkSize) {
      console.log(`\n${result.repoName}:`);
      console.log(`  Format: ${result.coreSdkSize.format}`);
      console.log(`  Raw: ${result.coreSdkSize.size.toFixed(2)} KB`);
    }
  });
}
