export interface OptimizationConfig {
  sourcemap: boolean;
  treeshake:
    | boolean
    | {
        moduleSideEffects?: boolean;
        propertyReadSideEffects?: boolean;
        tryCatchDeoptimization?: boolean;
      };
  babel: {
    presets: [string, Record<string, unknown>][];
  };
  terser:
    | false
    | {
        ecma?: number;
        compress?: Record<string, unknown>;
        mangle?:
          | boolean
          | {
              properties?: {
                regex?: RegExp;
              };
            };
      };
}

export interface OptimizationLevel {
  name: string;
  description: string;
  config: OptimizationConfig;
}

export interface BuildTiming {
  duration: number;
  description: string;
  startTime?: number;
}

export interface BuildTimings {
  versionCheck: BuildTiming;
  directorySetup: BuildTiming;
  bundleBuild: BuildTiming;
  analysis: BuildTiming;
  reportGeneration: BuildTiming;
  total: BuildTiming;
}

export interface SdkVersions {
  coinbase: string | null;
  metamask: string | null;
  walletconnect: string | null;
}

export interface BundleAnalysis {
  sdk: string;
  version: string;
  raw: number;
  gzip: number;
  brotli: number;
}

export interface HistoryEntry {
  timestamp: string;
  versions: SdkVersions;
  results: Record<string, BundleAnalysis[]>;
}

export interface UserInteractionOptions {
  skipPrompts?: boolean;
  forceRebuild?: boolean;
  selectedLevels?: string[];
}

export interface AnalyzerOptions extends UserInteractionOptions {
  outputPath?: string;
  historyLimit?: number;
}
