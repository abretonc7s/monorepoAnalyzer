import fs from "fs";
import { globSync } from "glob";
import path from "path";
import { repositories } from "./types/repositories";

interface CountLinesParams {
  directories: string[];
  filePatterns: string[];
  testFilePatterns: string[];
  repoName: string;
}

function countLinesInRepo({
  directories,
  filePatterns,
  testFilePatterns,
  repoName,
}: CountLinesParams) {
  const result = {
    totalLines: 0,
    testLines: 0,
    nonTestLines: 0,
  };

  directories.forEach((dir) => {
    filePatterns.forEach((pattern) => {
      const globPattern = path.join(dir, pattern);

      console.log(`Searching pattern: ${globPattern}`);

      const files = globSync(globPattern);

      console.log(`Found ${files.length} files in ${dir}`);

      files.forEach((file) => {
        if (!fs.existsSync(file)) {
          console.log(`File does not exist: ${file}`);

          return;
        }

        const isTestFile = testFilePatterns.some((testPattern) =>
          file.includes(testPattern),
        );
        const lines = fs.readFileSync(file, "utf-8").split("\n").length;

        result.totalLines += lines;

        if (isTestFile) {
          result.testLines += lines;
        } else {
          result.nonTestLines += lines;
        }
      });
    });
  });

  console.log(`Repository: ${repoName}`);
  console.log(`Total lines: ${result.totalLines}`);
  console.log(`Test lines: ${result.testLines}`);
  console.log(`Non-test lines: ${result.nonTestLines}`);
  console.log("-------------------------------------");

  return result;
}

interface RepoSummary {
  repoName: string;
  totalLines: number;
  testLines: number;
  nonTestLines: number;
  packages: number;
}

export function analyzeLineCounts() {
  const testFilePatterns = [".test.", ".spec.", "__tests__"];
  const repoSummaries = new Map<string, RepoSummary>();

  repositories.forEach((repo) => {
    const summary = repoSummaries.get(repo.repoName) ?? {
      repoName: repo.repoName,
      totalLines: 0,
      testLines: 0,
      nonTestLines: 0,
      packages: 0,
    };

    repo.packages.forEach((pkg) => {
      const fullPath = path.join(repo.baseDirectory, pkg.path);
      const result = countLinesInRepo({
        directories: [fullPath],
        filePatterns: ["src/**/*.{ts,tsx}"],
        testFilePatterns,
        repoName: `${repo.repoName}/${pkg.name}`,
      });

      summary.totalLines += result.totalLines;
      summary.testLines += result.testLines;
      summary.nonTestLines += result.nonTestLines;
      summary.packages += 1;
    });

    repoSummaries.set(repo.repoName, summary);
  });

  // Print repository summaries
  console.log("\n=== Repository Summaries ===");
  repoSummaries.forEach((summary) => {
    console.log(`\nRepository: ${summary.repoName}`);
    console.log(`Number of packages: ${summary.packages}`);
    console.log(`Total lines: ${summary.totalLines}`);
    console.log(`Test lines: ${summary.testLines}`);
    console.log(`Non-test lines: ${summary.nonTestLines}`);
    console.log(
      `Test/Total ratio: ${((summary.testLines / summary.totalLines) * 100).toFixed(1)}%`,
    );
  });
}
