import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser, { Options as TerserOptions } from "@rollup/plugin-terser";
import path from "path";
import type { RollupOptions, Plugin } from "rollup";
import { visualizer } from "rollup-plugin-visualizer";
import { OPTIMIZATION_LEVELS } from "./config";
import { getPackageVersions } from "./utils";

interface CreateConfigParams {
  input: string;
  output: string;
  level: keyof typeof OPTIMIZATION_LEVELS;
}

export function createConfig({
  input,
  output,
  level,
}: CreateConfigParams): RollupOptions {
  const name = path.basename(output, ".js");
  const optimization = OPTIMIZATION_LEVELS[level];
  const versions = getPackageVersions();
  const sdkVersion = versions[name.toLowerCase() as keyof typeof versions];

  const plugins: Plugin[] = [
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
  ];

  if (optimization.config.terser) {
    const terserConfig = optimization.config.terser as TerserOptions;

    plugins.push(terser(terserConfig));
  }

  const config: RollupOptions = {
    input,
    output: {
      file: `dist/${level}/${name}/${sdkVersion}/${output}`,
      format: "es",
      sourcemap: optimization.config.sourcemap,
    },
    treeshake: optimization.config.treeshake,
    plugins,
  };

  return config;
}
