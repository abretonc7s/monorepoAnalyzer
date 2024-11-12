import { OptimizationLevel } from "./types";

export const OPTIMIZATION_LEVELS: Record<string, OptimizationLevel> = {
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

export const SDK_CONFIGS = [
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
] as const;
