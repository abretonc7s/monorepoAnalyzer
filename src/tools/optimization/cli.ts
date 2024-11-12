#!/usr/bin/env node
import { analyzeBundles } from "./analyzer";
import { program } from "commander";

program
  .name("wallet-optimizer")
  .description("CLI tool for optimizing wallet SDKs")
  .version("1.0.0");

program
  .command("analyze")
  .description("Analyze bundle sizes across different optimization levels")
  .option("-y, --yes", "Skip all prompts and use defaults")
  .option("-f, --force", "Force rebuild all levels")
  .option("-l, --levels <levels>", "Comma-separated list of levels to build")
  .action(async (options) => {
    try {
      await analyzeBundles({
        skipPrompts: options.yes,
        forceRebuild: options.force,
        selectedLevels: options.levels?.split(","),
      });
    } catch (error) {
      console.error("Error during analysis:", error);
      process.exit(1);
    }
  });

program.parse();
