import { type Abi, type Address } from 'viem'

export interface AddressConfig {
  name: string
  InterchainClientV1: {
    address: Address
    abi: Abi
    startBlock: number
  }
  InterchainDB: {
    address: Address
    abi: Abi
    startBlock: number
  }
}