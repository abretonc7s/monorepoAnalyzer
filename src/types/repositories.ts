interface PackageConfig {
  path: string;
  name: string;
}

interface RepositoryConfig {
  repoName: string;
  baseDirectory: string;
  githubUrl: string;
  packages: PackageConfig[];
}

export const repositories: RepositoryConfig[] = [
  {
    repoName: 'Coinbase Wallet SDK',
    baseDirectory: '/Volumes/FD/Projects/coinbase-wallet-sdk',
    githubUrl: 'https://github.com/coinbase/coinbase-wallet-sdk',
    packages: [
      {
        name: 'wallet-sdk',
        path: 'packages/wallet-sdk'
      }
    ]
  },
  {
    repoName: 'MetaMask SDK',
    baseDirectory: '/Volumes/FD/Projects/metamask/metamask-sdk',
    githubUrl: 'https://github.com/MetaMask/metamask-sdk',
    packages: [
      {
        name: 'sdk-install-modal-web',
        path: 'packages/sdk-install-modal-web'
      },
      {
        name: 'sdk-communication-layer',
        path: 'packages/sdk-communication-layer'
      },
      {
        name: 'sdk',
        path: 'packages/sdk'
      },
      {
        name: 'sdk-react',
        path: 'packages/sdk-react'
      },
    //   {
    //     name: 'sdk-react-native',
    //     path: 'packages/sdk-react-native'
    //   }
    ]
  },
  {
    repoName: 'WalletConnect',
    baseDirectory: '/Volumes/FD/Projects/walletconnect-monorepo',
    githubUrl: 'https://github.com/WalletConnect/walletconnect-monorepo',
    packages: [
      {
        name: 'types',
        path: 'packages/types'
      },
      {
        name: 'utils',
        path: 'packages/utils'
      },
      {
        name: 'core',
        path: 'packages/core'
      },
      {
        name: 'sign-client',
        path: 'packages/sign-client'
      },
    //   {
    //     name: 'react-native-compat',
    //     path: 'packages/react-native-compat'
    //   },
      {
        name: 'web3wallet',
        path: 'packages/web3wallet'
      },
    //   {
    //     name: 'universal-provider',
    //     path: 'providers/universal-provider'
    //   },
    //   {
    //     name: 'signer-connection',
    //     path: 'providers/signer-connection'
    //   },
    //   {
    //     name: 'ethereum-provider',
    //     path: 'providers/ethereum-provider'
    //   }
    ]
  }
];
