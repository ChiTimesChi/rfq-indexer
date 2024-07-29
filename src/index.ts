import { type Address, trim } from 'viem'

import { ponder } from '@/generated'
import { networkDetails } from '@/ponder.config'
import { generateEntryId } from '@/utils/generateEntryId'

/* ORIGIN CHAIN EVENTS */

ponder.on('InterchainDB:InterchainEntryWritten', async ({ event, context }) => {
  const {
    db: { Transaction },
    network: { chainId },
  } = context

  const { dbNonce, srcWriter, digest, entryValue } = event.args

  const id = generateEntryId(chainId, Number(dbNonce))

  await Transaction.create({
    id,
    data: {
      srcChainId: chainId,
      srcDbNonce: Number(dbNonce),
      srcWriter: trim(srcWriter),
      digest,
      entryValue,
      createdAt: Math.trunc(Date.now() / 1000),
      status: 'InterchainEntryWritten',
      finalized: false,
    },
  })
})

ponder.on(
  'InterchainClientV1:InterchainTransactionSent',
  async ({ event, context }) => {
    const {
      db: { Transaction },
      network: { chainId },
    } = context

    const {
      log: { address, blockNumber, transactionHash },
      block: { timestamp },
      args: {
        transactionId,
        dbNonce,
        dstChainId,
        srcSender,
        dstReceiver,
        verificationFee,
        executionFee,
        options,
        message,
      },
      transaction: { from, gas, to, value },
    } = event

    const id = generateEntryId(chainId, Number(dbNonce))

    await Transaction.update({
      id,
      data: {
        srcChainId: chainId,
        transactionId,
        srcDbNonce: Number(dbNonce),
        dstChainId: Number(dstChainId),
        srcSender: trim(srcSender),
        dstReceiver: trim(dstReceiver),
        verificationFee,
        executionFee,
        options,
        message,
        sentAddress: address,
        sentBlockNumber: blockNumber,
        sentTransactionHash: transactionHash,
        sentTimestamp: Number(timestamp),
        updatedAt: Math.trunc(Date.now() / 1000),
        sentFrom: trim(from),
        sentTo: trim(to as Address),
        sentGasProvided: gas,
        sentValue: value,
      },
    })
  }
)

ponder.on(
  'InterchainDB:InterchainEntryVerificationRequested',
  async ({ event, context }) => {
    const {
      db: { Transaction },
      network: { chainId },
    } = context

    const { dstChainId, dbNonce, srcModules } = event.args

    const id = generateEntryId(chainId, Number(dbNonce))

    await Transaction.update({
      id,
      data: {
        dstChainId: Number(dstChainId),
        srcModules: srcModules as Address[],
        status: 'InterchainEntryVerificationRequested',
        updatedAt: Math.trunc(Date.now() / 1000),
      },
    })
  }
)

/* DESTINATION CHAIN EVENTS */

ponder.on(
  'InterchainDB:InterchainEntryVerified',
  async ({ event, context }) => {
    const {
      db: { AppConfigV1, Transaction },
      client,
    } = context

    const {
      args: { module, srcChainId, dbNonce },
      block: { timestamp },
    } = event

    const id = generateEntryId(Number(srcChainId), Number(dbNonce))

    /*
      1. module is in the list of modules that dst receiver trusts

      2. srcChainId, dbNonce match values from the InterchainTransactionSent event
    */

    const txn = await Transaction.findUnique({
      id,
    })

    /* TODO */
    /* Currently we can't use client to read contract from a different chain Id */
    /* This needs to be fixed so we generating appConfig table entry when txn is originally sent */
    const dstReceiver = txn?.dstReceiver
    const dstChainId = txn?.dstChainId
    if (dstChainId && dstReceiver && networkDetails[dstChainId]) {
      const { InterchainClientV1 } = networkDetails[dstChainId] as {
        InterchainClientV1: {
          address: Address
          abi: any
          startBlock: number
        }
      }

      const response = await client.readContract({
        abi: InterchainClientV1.abi,
        address: InterchainClientV1.address,
        functionName: 'getAppReceivingConfigV1',
        args: [trim(dstReceiver as Address)],
      })

      const [
        { requiredResponses, optimisticSeconds, guardFlag, guard },
        modules,
      ] = response

      const appConfig =
        (await AppConfigV1.findUnique({ id: trim(dstReceiver as Address) })) ??
        (await AppConfigV1.create({
          id: trim(dstReceiver as Address),
          data: {
            requiredResponses,
            optimisticSeconds,
            guardFlag,
            guard,
            modules,
            chainId: dstChainId,
          },
        }))

      await Transaction.update({
        id,
        data: {
          appConfigV1Id: appConfig.id,
          updatedAt: Math.trunc(Date.now() / 1000),
          dstDbNonce: Number(dbNonce),
        },
      })
    }

    // checks srcChainId, dbNonce match values from the InterchainTransactionSent event
    const validTransaction =
      txn &&
      txn.srcChainId === Number(srcChainId) &&
      txn.srcDbNonce === Number(dbNonce)

    if (!validTransaction) {
      return
    }

    const currentTxn = await Transaction.findUnique({ id })

    const appConfigV1 =
      currentTxn &&
      (await AppConfigV1.findUnique({
        id: currentTxn.appConfigV1Id as Address,
      }))

    // check that module is in the list of modules that dst receiver trusts
    if (
      validTransaction &&
      appConfigV1 &&
      appConfigV1.modules?.includes(module)
    ) {
      await Transaction.update({
        id,
        data: {
          srcChainId: Number(srcChainId),
          verifiedAt: Number(timestamp),
          verifierModule: trim(module),
          status: 'InterchainEntryVerified',
          updatedAt: Math.trunc(Date.now() / 1000),
          dstDbNonce: Number(dbNonce),
        },
      })
    }
  }
)

ponder.on(
  'InterchainClientV1:InterchainTransactionReceived',
  async ({ event, context }) => {
    const {
      db: { Transaction },
    } = context

    const {
      log: { address, blockNumber, transactionHash },
      block: { timestamp },
      args: { dbNonce, srcChainId },
      transaction: { from, to, gas, value },
    } = event

    const id = generateEntryId(Number(srcChainId), Number(dbNonce))

    await Transaction.update({
      id,
      data: {
        receivedAddress: address,
        receivedBlockNumber: blockNumber,
        receivedTransactionHash: transactionHash,
        receivedTimestamp: Number(timestamp),
        receivedTo: trim(to as Address),
        receivedGasProvided: gas,
        receivedValue: value,
        // Executor is msg.sender in the InterchainTransactionReceived event
        executor: trim(from),
        updatedAt: Math.trunc(Date.now() / 1000),
        finalized: true,
      },
    })
  }
)