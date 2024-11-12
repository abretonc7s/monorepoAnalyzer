import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { visualizer } from "rollup-plugin-visualizer";
import json from "@rollup/plugin-json";

const createConfig = (input, output) => {
  const name = output.split("/").pop().replace(".js", "");

  return {
    input,
    output: {
      file: output,
      format: "es",
    },
    plugins: [
      json(),
      nodeResolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs({
        transformMixedEsModules: true,
      }),
      babel({
        babelHelpers: "bundled",
        presets: [["@babel/preset-env", { modules: false }]],
      }),
      visualizer({
        filename: `stats-${name}.html`,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
  };
};

export default [
  createConfig(
    "node_modules/@coinbase/wallet-sdk/dist/index.js",
    "dist/coinbase.js"
  ),
  createConfig(
    "node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js",
    "dist/metamask.js"
  ),
  createConfig(
    "node_modules/@walletconnect/web3wallet/dist/index.es.js",
    "dist/walletconnect.js"
  ),
];
