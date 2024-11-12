# monorepoAnalyser

monorepoAnalyser is a tool designed to analyze and compare the structure, size, and dependencies of major Web3 SDKs and protocols, including **MetaMask**, **WalletConnect**, and **Coinbase**. The goal is to provide insights into architecture, codebase quality, and complexity by performing code analysis, dependency visualization, and build size evaluation.

## Key Features

- **Line Counting**: Analyze the number of TypeScript code lines, separating test files from non-test files.
- **Dependency Visualization**: Generate a dependency graph for each SDK and detect circular dependencies.
- **Build Size Analysis**: 
  - Quick size analysis using `size-limit` to simulate web environment
  - Comprehensive build optimization analysis across different profiles:
    - Development (unoptimized with source maps)
    - Basic (safe optimizations)
    - Standard (balanced production optimizations)
    - Aggressive (maximum optimizations)
- **Comparison Across Monorepos**: Compare key metrics like code lines, dependency complexity, and build size across MetaMask SDK, WalletConnect SDK, and Coinbase SDK.

## Web3 SDKs Analyzed

1. **MetaMask SDK**: SDK for connecting dApps to MetaMask wallet.
   - Repository path: `/Volumes/FD/Projects/metamask/metamask-sdk/packages/`
   
2. **WalletConnect SDK**: Protocol for connecting dApps to wallets via QR code or deep linking.
   - Repository path: `/Volumes/FD/Projects/walletconnect-monorepo/packages/`

3. **Coinbase Wallet SDK**: SDK for dApps to interact with Coinbase Wallet.
   - Repository path: `/Volumes/FD/Projects/coinbase-wallet-sdk/packages/wallet-sdk/`

## Available Commands

```bash
# Run basic analysis
yarn start

# Analyze bundle sizes in simulated web environment
yarn size

# Perform comprehensive build analysis with different optimization profiles
yarn analyze-all

# Clean up generated files
yarn clean
```

## Build Analysis

The `yarn analyze-all` command generates optimized builds for each SDK using different optimization profiles:

1. **Development Profile**
   - No optimizations
   - Includes source maps and console logs
   - Useful for debugging and development

2. **Basic Profile**
   - Safe optimizations with basic tree shaking
   - Includes source maps
   - Balanced for development/testing

3. **Standard Profile**
   - Production-ready optimizations
   - Tree shaking and dead code elimination
   - Removes console logs
   - Targets modern browsers

4. **Aggressive Profile**
   - Maximum optimizations
   - Advanced tree shaking
   - Property mangling
   - Targets latest browser versions
   - May affect debugging capabilities

The analysis generates an interactive HTML report (`optimization-report.html`) that includes:
- Bundle sizes (raw, gzip, brotli) for each optimization level
- Size comparisons and improvements
- Detailed optimization settings
- Build timing information
- Version history tracking

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

## Reports and Deployment

The analysis generates several reports:
- `optimization-report.html`: Interactive report showing bundle sizes and optimizations
- `stats/`: Directory containing detailed bundle analysis for each optimization level
- `dist/`: Directory containing the built bundles

These reports are automatically deployed to GitHub Pages when pushing to the main branch. You can:

```bash
# Generate and deploy reports manually
yarn analyze-all
yarn deploy

# View the latest reports
open https://abretonc7s.github.io/monorepoAnalyser/
```

### Available Reports
- Bundle Size Analysis: `optimization-report.html`
- Detailed Stats: `/stats/<optimization-level>/stats-<sdk>.html`
- Version History: `/stats/version-history.json`



