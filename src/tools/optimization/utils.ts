import fs from "fs";
import path from "path";
import chalk from "chalk";
import { OPTIMIZATION_LEVELS } from "./config";

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

export interface SdkVersions {
  coinbase: string | null;
  metamask: string | null;
  walletconnect: string | null;
}

export function getPackageVersions(): SdkVersions {
  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  const packageJson: PackageJson = JSON.parse(
    fs.readFileSync(packageJsonPath, "utf-8"),
  );

  const allDependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  return {
    coinbase:
      allDependencies?.["@coinbase/wallet-sdk"]?.replace("^", "") ?? null,
    metamask: allDependencies?.["@metamask/sdk"]?.replace("^", "") ?? null,
    walletconnect:
      allDependencies?.["@walletconnect/web3wallet"]?.replace("^", "") ?? null,
  };
}

export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function formatDuration(ms: number): string {
  if (!ms || ms === 0) return "0ms";
  if (ms < 1000) return `${Math.round(ms)}ms`;

  const seconds = ms / 1000;

  if (seconds < 60) return `${seconds.toFixed(2)}s`;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = (seconds % 60).toFixed(2);

  return `${minutes}m ${remainingSeconds}s`;
}

interface PromptOptions {
  question: string;
  defaultValue?: "y" | "n";
}

export async function promptUser({
  question,
  defaultValue = "n",
}: PromptOptions): Promise<boolean> {
  return new Promise((resolve) => {
    const options = defaultValue.toLowerCase() === "y" ? "[Y/n]" : "[y/N]";
    const stdin = process.stdin;
    const stdout = process.stdout;

    stdout.write(`${chalk.cyan(question)} ${chalk.gray(options)}: `);

    function cleanup() {
      stdin.pause();
      stdin.removeListener("data", handleData);
    }

    function handleData(data: Buffer) {
      const input = data.toString().trim().toLowerCase();

      stdout.write("\n");
      cleanup();

      if (input === "") {
        resolve(defaultValue === "y");

        return;
      }

      resolve(input === "y");
    }

    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.once("data", handleData);
  });
}

export async function promptForOptimizationLevels(
  existingLevels: string[],
): Promise<string[]> {
  console.log("\nAvailable optimization levels:");
  Object.entries(OPTIMIZATION_LEVELS).forEach(([key, value]) => {
    const exists = existingLevels.includes(key);

    console.log(
      `  ${exists ? "📦" : "⭕"} ${key}: ${value.name} - ${value.description}`,
    );
  });

  const answer = await promptUser({
    question: "\nBuild all levels? [default: yes]",
    defaultValue: "y",
  });

  if (answer) {
    return Object.keys(OPTIMIZATION_LEVELS);
  }

  return new Promise((resolve) => {
    const levels = Object.keys(OPTIMIZATION_LEVELS);
    const stdin = process.stdin;
    const stdout = process.stdout;

    console.log("\nEnter level numbers (comma-separated) to build:");
    levels.forEach((level, index) => {
      console.log(`  ${index + 1}. ${level}`);
    });

    stdout.write("Selection [default: all]: ");

    stdin.resume();
    stdin.setEncoding("utf8");

    function cleanup() {
      stdin.pause();
      stdin.removeListener("data", handleData);
    }

    function handleData(data: Buffer) {
      const input = data.toString().trim();

      cleanup();

      if (input === "") {
        resolve(levels);

        return;
      }

      const selected = input
        .split(",")
        .map((n) => levels[parseInt(n.trim()) - 1])
        .filter(Boolean);

      resolve(selected.length ? selected : levels);
    }

    stdin.once("data", handleData);
  });
}
