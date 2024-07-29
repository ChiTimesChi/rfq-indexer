import { createConfig } from '@ponder/core'
import { http } from 'viem'

import { InterchainClientV1Abi } from '@/abis/InterchainClientV1Abi'
import { InterchainDBAbi } from '@/abis/InterchainDBAbi'
import { AddressConfig } from '@/types'

const ethChainId = 11155111
const arbChainId = 421614
const avaxChainId = 43113

const configByChainId = {
  local: {
    [11155111]: {
      transport: http('http://omnirpc:9001/rpc/11155111'),
      chainName: 'ethSepoliaAnvil',
      interchainClientV1Address: '0x5350E98C58e401c2a1cd418CC4D9664a119BBFe5',
      interchainDBAddress: '0x6438CB36cb18520774EfC7A172410D8BBBe9a428',
      interchainClientV1StartBlock: 0,
      interchainDBStartBlock: 0,
    },
    [421614]: {
      transport: http('http://omnirpc:9001/rpc/421614'),
      chainName: 'arbSepoliaAnvil',
      interchainClientV1Address: '0x5350E98C58e401c2a1cd418CC4D9664a119BBFe5',
      interchainDBAddress: '0x6438CB36cb18520774EfC7A172410D8BBBe9a428',
      interchainClientV1StartBlock: 0,
      interchainDBStartBlock: 0,
    },
    [43113]: {
      transport: http('http://omnirpc:9001/rpc/43113'),
      chainName: 'avaxFujiAnvil',
      interchainClientV1Address: '0x5350E98C58e401c2a1cd418CC4D9664a119BBFe5',
      interchainDBAddress: '0x6438CB36cb18520774EfC7A172410D8BBBe9a428',
      interchainClientV1StartBlock: 0,
      interchainDBStartBlock: 0,
    },
    disableCache: true,
  },
  testnet: {
    [11155111]: {
      transport: http(process.env.ETH_SEPOLIA_RPC),
      chainName: 'ethSepolia',
      interchainClientV1Address: '0x588c7Bda9366EEf83EdF67049a1C45f737aFFe0F',
      interchainDBAddress: '0x2DeF303EA27a3674bb3a5d017e60B2Ef43312A11',
      interchainClientV1StartBlock: 6015230,
      interchainDBStartBlock: 6015205,
    },
    [421614]: {
      transport: http(process.env.ARB_SEPOLIA_RPC),
      chainName: 'arbSepolia',
      interchainClientV1Address: '0x7CC23f230f07E983204Ce41E1ee703534445172e',
      interchainDBAddress: '0x8b455AB9B721887CCb6bA55aB1C4268FF91B0e0D',
      interchainClientV1StartBlock: 49961080,
      interchainDBStartBlock: 49960499,
    },
    [43113]: {
      transport: http(process.env.AVAX_FUJI_RPC),
      chainName: 'avaxFuji',
      interchainClientV1Address: '0x188cA7f9615042654e483Ed840582208009A9ADF',
      interchainDBAddress: '0x11bC9AB4e16bf26A465A6506918888a099BBdBFD',
      interchainClientV1StartBlock: 34087520,
      interchainDBStartBlock: 34087520,
    },
    disableCache: false,
  },
}

const env =
  process.env.APP_ENV === 'local'
    ? configByChainId.local
    : configByChainId.testnet

export const networkDetails = {
  [ethChainId]: {
    name: env[ethChainId].chainName,
    InterchainClientV1: {
      address: env[ethChainId].interchainClientV1Address,
      abi: InterchainClientV1Abi,
      startBlock: env[ethChainId].interchainClientV1StartBlock,
    },
    InterchainDB: {
      address: env[ethChainId].interchainDBAddress,
      abi: InterchainDBAbi,
      startBlock: env[ethChainId].interchainDBStartBlock,
    },
  },
  [arbChainId]: {
    name: env[arbChainId].chainName,
    InterchainClientV1: {
      address: env[arbChainId].interchainClientV1Address,
      abi: InterchainClientV1Abi,
      startBlock: env[arbChainId].interchainClientV1StartBlock,
    },
    InterchainDB: {
      address: env[arbChainId].interchainDBAddress,
      abi: InterchainDBAbi,
      startBlock: env[arbChainId].interchainDBStartBlock,
    },
  },
  [avaxChainId]: {
    name: env[avaxChainId].chainName,
    InterchainClientV1: {
      address: env[avaxChainId].interchainClientV1Address,
      abi: InterchainClientV1Abi,
      startBlock: env[avaxChainId].interchainClientV1StartBlock,
    },
    InterchainDB: {
      address: env[avaxChainId].interchainDBAddress,
      abi: InterchainDBAbi,
      startBlock: env[avaxChainId].interchainDBStartBlock,
    },
  },
} as Record<number, AddressConfig>

const config = createConfig({
  networks: {
    [env[ethChainId].chainName]: {
      chainId: ethChainId,
      transport: env[ethChainId].transport,
      disableCache: env.disableCache,
    },
    [env[arbChainId].chainName]: {
      chainId: arbChainId,
      transport: env[arbChainId].transport,
      disableCache: env.disableCache,
    },
    [env[avaxChainId].chainName]: {
      chainId: avaxChainId,
      transport: env[avaxChainId].transport,
      disableCache: env.disableCache,
    },
  },
  contracts: {
    InterchainClientV1: {
      network: {
        [env[ethChainId].chainName]: {
          address: networkDetails[ethChainId]?.InterchainClientV1.address,
          startBlock: networkDetails[ethChainId]?.InterchainClientV1.startBlock,
        },
        [env[arbChainId].chainName]: {
          address: networkDetails[arbChainId]?.InterchainClientV1.address,
          startBlock: networkDetails[arbChainId]?.InterchainClientV1.startBlock,
        },
        [env[avaxChainId].chainName]: {
          address: networkDetails[avaxChainId]?.InterchainClientV1.address,
          startBlock:
            networkDetails[avaxChainId]?.InterchainClientV1.startBlock,
        },
      },
      abi: InterchainClientV1Abi,
    },
    InterchainDB: {
      network: {
        [env[ethChainId].chainName]: {
          address: networkDetails[ethChainId]?.InterchainDB.address,
          startBlock: networkDetails[ethChainId]?.InterchainDB.startBlock,
        },
        [env[arbChainId].chainName]: {
          address: networkDetails[arbChainId]?.InterchainDB.address,
          startBlock: networkDetails[arbChainId]?.InterchainDB.startBlock,
        },
        [env[avaxChainId].chainName]: {
          address: networkDetails[avaxChainId]?.InterchainDB.address,
          startBlock: networkDetails[avaxChainId]?.InterchainDB.startBlock,
        },
      },
      abi: InterchainDBAbi,
    },
  },
})

export default config