import { SDK_CONFIGS } from "./src/tools/optimization/config";
import { createConfig } from "./src/tools/optimization/rollup-config";

const level = process.env.OPTIMIZATION_LEVEL ?? "development";

export default SDK_CONFIGS.map((sdk) =>
  createConfig({
    input: sdk.input,
    output: sdk.output,
    level: level,
  }),
);
