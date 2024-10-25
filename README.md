# monorepoAnalyser

monorepoAnalyser is a tool designed to analyze and compare the structure, size, and dependencies of major Web3 SDKs and protocols, including **MetaMask**, **WalletConnect**, and **Coinbase**. The goal is to provide insights into architecture, codebase quality, and complexity by performing code analysis, dependency visualization, and build size evaluation.

## Key Features

- **Line Counting**: Analyze the number of TypeScript code lines, separating test files from non-test files.
- **Dependency Visualization**: Generate a dependency graph for each SDK and detect circular dependencies.
- **Build Size Analysis**: Measure the build output size for each SDK after compilation.
- **Comparison Across Monorepos**: Compare key metrics like code lines, dependency complexity, and build size across MetaMask SDK, WalletConnect SDK, and Coinbase SDK.

## Web3 SDKs Analyzed

1. **MetaMask SDK**: SDK for connecting dApps to MetaMask wallet.
   - Repository path: `/Volumes/FD/Projects/metamask/metamask-sdk/packages/`
   
2. **WalletConnect SDK**: Protocol for connecting dApps to wallets via QR code or deep linking.
   - Repository path: `/Volumes/FD/Projects/walletconnect-monorepo/packages/`

3. **Coinbase Wallet SDK**: SDK for dApps to interact with Coinbase Wallet.
   - Repository path: `/Volumes/FD/Projects/coinbase-wallet-sdk/packages/wallet-sdk/`

## Configuration

The tool uses environment variables to configure the paths to the monorepos. Copy the `.env.example` file to `.env` and adjust the paths according to your local setup:

```bash
cp .env.example .env
```

Available environment variables:
- `COINBASE_SDK_PATH`: Path to Coinbase Wallet SDK repository
- `METAMASK_SDK_PATH`: Path to MetaMask SDK repository
- `WALLETCONNECT_PATH`: Path to WalletConnect monorepo

Default values are provided but should be overwritten in your `.env` file.

## Installation and Setup

```bash
git clone https://github.com/yourusername/monorepoAnalyser.git
cd monorepoAnalyser
yarn
yarn analyze
```



