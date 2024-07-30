import { type Address, trim } from 'viem'

import { ponder } from '@/generated'
import { networkDetails } from '@/ponder.config'
import { generateEntryId } from '@/utils/generateEntryId'

/* ORIGIN CHAIN EVENTS */


// FastBridge V2 Events
  
  ponder.on('FastBridgeV2:BridgeRequested', async ({ event, context }) => {
    const {
      args: {
        transactionId,
        sender,
        request,
        destChainId,
        originToken,
        destToken,
        originAmount,
        destAmount,
        sendChainGas,
      },
      block: { timestamp },
      transaction: { hash },
    } = event
  
    // TODO: Create database entry
    // await context.db.BridgeRequest.create({
    //   id: transactionId,
    //   data: {
    //     sender: trim(sender),
    //     request,
    //     destChainId: Number(destChainId),
    //     originToken: trim(originToken),
    //     destToken: trim(destToken),
    //     originAmount,
    //     destAmount,
    //     sendChainGas,
    //     timestamp: Number(timestamp),
    //     transactionHash: hash,
    //   },
    // })
  })
  
  ponder.on('FastBridgeV2:BridgeDepositRefunded', async ({ event, context }) => {
    const {
      args: { transactionId, to, token, amount },
      block: { timestamp },
      transaction: { hash },
    } = event
  
    // TODO: Create database entry or update existing entry
    // await context.db.BridgeRefund.create({
    //   id: transactionId,
    //   data: {
    //     recipient: trim(to),
    //     token: trim(token),
    //     amount,
    //     timestamp: Number(timestamp),
    //     transactionHash: hash,
    //   },
    // })
  })
  
  ponder.on('FastBridgeV2:BridgeProofProvided', async ({ event, context }) => {
    const {
      args: { transactionId, relayer, transactionHash },
      block: { timestamp },
      transaction: { hash },
    } = event
  
    // TODO: Create database entry or update existing entry
    // await context.db.BridgeProof.create({
    //   id: transactionId,
    //   data: {
    //     relayer: trim(relayer),
    //     proofTransactionHash: transactionHash,
    //     timestamp: Number(timestamp),
    //     transactionHash: hash,
    //   },
    // })
  })
  
  ponder.on('FastBridgeV2:BridgeDepositClaimed', async ({ event, context }) => {
    const {
      args: { transactionId, relayer, to, token, amount },
      block: { timestamp },
      transaction: { hash },
    } = event
  
    // TODO: Create database entry or update existing entry
    // await context.db.BridgeClaim.create({
    //   id: transactionId,
    //   data: {
    //     relayer: trim(relayer),
    //     recipient: trim(to),
    //     token: trim(token),
    //     amount,
    //     timestamp: Number(timestamp),
    //     transactionHash: hash,
    //   },
    // })
  })

  /* DESTINATION CHAIN EVENTS */


  ponder.on('FastBridgeV2:BridgeRelayed', async ({ event, context }) => {
    const {
      args: {
        transactionId,
        relayer,
        to,
        originChainId,
        originToken,
        destToken,
        originAmount,
        destAmount,
        chainGasAmount,
      },
      block: { timestamp },
      transaction: { hash },
    } = event
  
    // TODO: Create or update database entry
    // await context.db.BridgeRelay.create({
    //   id: transactionId,
    //   data: {
    //     relayer: trim(relayer),
    //     recipient: trim(to),
    //     originChainId: Number(originChainId),
    //     originToken: trim(originToken),
    //     destToken: trim(destToken),
    //     originAmount,
    //     destAmount,
    //     chainGasAmount,
    //     timestamp: Number(timestamp),
    //     transactionHash: hash,
    //   },
    // })
  })
  
  // ... existing code ...