const coinbaseWebpackConfig = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    extensions: [".js", ".ts", ".mjs"],
    mainFields: ["module", "browser", "main"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /node_modules\/@coinbase/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "defaults",
                  modules: false,
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
    ],
  },
});

const baseWebpackConfig = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    extensions: [".js", ".ts", ".mjs"],
    mainFields: ["browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        include: /node_modules\/@(metamask|walletconnect)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { modules: false }]],
          },
        },
      },
    ],
  },
});

module.exports = [
  {
    name: "MetaMask SDK Core",
    path: ["node_modules/@metamask/sdk/dist/browser/es/metamask-sdk.js"],
    webpack: true,
    modifyWebpackConfig: baseWebpackConfig,
  },
  {
    name: "WalletConnect Core",
    path: ["node_modules/@walletconnect/web3wallet/dist/index.es.js"],
    webpack: true,
    modifyWebpackConfig: baseWebpackConfig,
  },
  {
    name: "Coinbase SDK",
    path: "node_modules/@coinbase/wallet-sdk/dist/**/*.js",
    webpack: true,
    modifyWebpackConfig: coinbaseWebpackConfig,
  },
];
