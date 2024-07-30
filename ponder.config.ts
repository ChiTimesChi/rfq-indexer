import { createConfig } from '@ponder/core'
import { http } from 'viem'

import { FastBridgeV2Abi } from '@/abis/FastBridgeV2'
import { AddressConfig } from '@/types'

// Mainnets
const ethereumChainId = 1
const optimismChainId = 10
const arbitrumChainId = 42161
const baseChainId = 8453
const blastChainId = 81457
const scrollChainId = 534352
const lineaChainId = 59144
const bnbChainId = 56

const configByChainId = {
    local: {
        [1]: {
          transport: http('http://omnirpc:9001/rpc/1'),
          chainName: 'ethereum',
          FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
          FastBridgeV2StartBlock: 19420718,
        },
        [10]: {
          transport: http('http://omnirpc:9001/rpc/10'),
          chainName: 'optimism',
          FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
          FastBridgeV2StartBlock: 117334308,
        },
        [42161]: {
          transport: http('http://omnirpc:9001/rpc/42161'),
          chainName: 'arbitrum',
          FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
          FastBridgeV2StartBlock: 189700328,
        },
        [8453]: {
          transport: http('http://omnirpc:9001/rpc/8453'),
          chainName: 'base',
          FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
          FastBridgeV2StartBlock: 12478374,
        },
        [81457]: {
          transport: http('http://omnirpc:9001/rpc/81457'),
          chainName: 'blast',
          FastBridgeV2Address: '0x34F52752975222d5994C206cE08C1d5B329f24dD',
          FastBridgeV2StartBlock: 6378234,
        },
        [534352]: {
          transport: http('http://omnirpc:9001/rpc/53452'),
          chainName: 'scroll',
          FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
          FastBridgeV2StartBlock: 5357000,
        },
        [59144]: {
          transport: http('http://omnirpc:9001/rpc/59144'),
          chainName: 'linea',
          FastBridgeV2Address: '0x34F52752975222d5994C206cE08C1d5B329f24dD',
          FastBridgeV2StartBlock: 7124666,
        },
        [56]: {
          transport: http('http://omnirpc:9001/rpc/56'),
          chainName: 'bnb',
          FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
          FastBridgeV2StartBlock: 40497843,
        },
        disableCache: true,
      },
  testnet: {
    [1]: {
      transport: http(process.env.ETH_MAINNET_RPC),
      chainName: 'ethereum',
      FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
      FastBridgeV2StartBlock: 19420718,
    },
    [10]: {
      transport: http(process.env.OPTIMISM_MAINNET_RPC),
      chainName: 'optimism',
      FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
      FastBridgeV2StartBlock: 117334308,
    },
    [42161]: {
      transport: http(process.env.ARBITRUM_MAINNET_RPC),
      chainName: 'arbitrum',
      FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
      FastBridgeV2StartBlock: 189700328,
    },
    [8453]: {
      transport: http(process.env.BASE_MAINNET_RPC),
      chainName: 'base',
      FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
      FastBridgeV2StartBlock: 12478374,
    },
    [81457]: {
      transport: http(process.env.BLAST_MAINNET_RPC),
      chainName: 'blast',
      FastBridgeV2Address: '0x34F52752975222d5994C206cE08C1d5B329f24dD',
      FastBridgeV2StartBlock: 6378234,
    },
    [534352]: {
      transport: http(process.env.SCROLL_MAINNET_RPC),
      chainName: 'scroll',
      FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
      FastBridgeV2StartBlock: 5357000,
    },
    [59144]: {
      transport: http(process.env.LINEA_MAINNET_RPC),
      chainName: 'linea',
      FastBridgeV2Address: '0x34F52752975222d5994C206cE08C1d5B329f24dD',
      FastBridgeV2StartBlock: 7124666,
    },
    [56]: {
      transport: http(process.env.BNB_MAINNET_RPC),
      chainName: 'bnb',
      FastBridgeV2Address: '0x5523D3c98809DdDB82C686E152F5C58B1B0fB59E',
      FastBridgeV2StartBlock: 40497843,
    },
    disableCache: false,
  },
}

const env =
  process.env.APP_ENV === 'local'
    ? configByChainId.local
    : configByChainId.testnet

export const networkDetails = {
    [ethereumChainId]: {
        name: env[ethereumChainId].chainName,
        FastBridgeV2: {
            address: env[ethereumChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[ethereumChainId].FastBridgeV2StartBlock,
        },
    },
    [optimismChainId]: {
        name: env[optimismChainId].chainName,
        FastBridgeV2: {
            address: env[optimismChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[optimismChainId].FastBridgeV2StartBlock,
        },
    },
    [arbitrumChainId]: {
        name: env[arbitrumChainId].chainName,
        FastBridgeV2: {
            address: env[arbitrumChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[arbitrumChainId].FastBridgeV2StartBlock,
        },
    },
    [baseChainId]: {
        name: env[baseChainId].chainName,
        FastBridgeV2: {
            address: env[baseChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[baseChainId].FastBridgeV2StartBlock,
        },
    },
    [blastChainId]: {
        name: env[blastChainId].chainName,
        FastBridgeV2: {
            address: env[blastChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[blastChainId].FastBridgeV2StartBlock,
        },
    },
    [scrollChainId]: {
        name: env[scrollChainId].chainName,
        FastBridgeV2: {
            address: env[scrollChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[scrollChainId].FastBridgeV2StartBlock,
        },
    },
    [lineaChainId]: {
        name: env[lineaChainId].chainName,
        FastBridgeV2: {
            address: env[lineaChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[lineaChainId].FastBridgeV2StartBlock,
        },
    },
    [bnbChainId]: {
        name: env[bnbChainId].chainName,
        FastBridgeV2: {
            address: env[bnbChainId].FastBridgeV2Address,
            abi: FastBridgeV2Abi,
            startBlock: env[bnbChainId].FastBridgeV2StartBlock,
        },
    },
} as Record<number, AddressConfig>

const config = createConfig({
    networks: {
        [env[ethereumChainId].chainName]: {
          chainId: ethereumChainId,
          transport: env[ethereumChainId].transport,
          disableCache: env.disableCache,
        },
        [env[optimismChainId].chainName]: {
          chainId: optimismChainId,
          transport: env[optimismChainId].transport,
          disableCache: env.disableCache,
        },
        [env[arbitrumChainId].chainName]: {
          chainId: arbitrumChainId,
          transport: env[arbitrumChainId].transport,
          disableCache: env.disableCache,
        },
        [env[baseChainId].chainName]: {
          chainId: baseChainId,
          transport: env[baseChainId].transport,
          disableCache: env.disableCache,
        },
        [env[blastChainId].chainName]: {
          chainId: blastChainId,
          transport: env[blastChainId].transport,
          disableCache: env.disableCache,
        },
        [env[scrollChainId].chainName]: {
          chainId: scrollChainId,
          transport: env[scrollChainId].transport,
          disableCache: env.disableCache,
        },
        [env[lineaChainId].chainName]: {
          chainId: lineaChainId,
          transport: env[lineaChainId].transport,
          disableCache: env.disableCache,
        },
        [env[bnbChainId].chainName]: {
          chainId: bnbChainId,
          transport: env[bnbChainId].transport,
          disableCache: env.disableCache,
        },
      },
  contracts: {
    FastBridgeV2: {
        network: {
          [env[ethereumChainId].chainName]: {
            address: networkDetails[ethereumChainId].FastBridgeV2.address,
            startBlock: networkDetails[ethereumChainId].FastBridgeV2.startBlock,
          },
          [env[optimismChainId].chainName]: {
            address: networkDetails[optimismChainId].FastBridgeV2.address,
            startBlock: networkDetails[optimismChainId].FastBridgeV2.startBlock,
          },
          [env[arbitrumChainId].chainName]: {
            address: networkDetails[arbitrumChainId].FastBridgeV2.address,
            startBlock: networkDetails[arbitrumChainId].FastBridgeV2.startBlock,
          },
          [env[baseChainId].chainName]: {
            address: networkDetails[baseChainId].FastBridgeV2.address,
            startBlock: networkDetails[baseChainId].FastBridgeV2.startBlock,
          },
          [env[blastChainId].chainName]: {
            address: networkDetails[blastChainId].FastBridgeV2.address,
            startBlock: networkDetails[blastChainId].FastBridgeV2.startBlock,
          },
          [env[scrollChainId].chainName]: {
            address: networkDetails[scrollChainId].FastBridgeV2.address,
            startBlock: networkDetails[scrollChainId].FastBridgeV2.startBlock,
          },
          [env[lineaChainId].chainName]: {
            address: networkDetails[lineaChainId].FastBridgeV2.address,
            startBlock: networkDetails[lineaChainId].FastBridgeV2.startBlock,
          },
          [env[bnbChainId].chainName]: {
            address: networkDetails[bnbChainId].FastBridgeV2.address,
            startBlock: networkDetails[bnbChainId].FastBridgeV2.startBlock,
          },
        },
        abi: FastBridgeV2Abi,
      },
  },
})

export default config