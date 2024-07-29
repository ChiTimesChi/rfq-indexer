import { createSchema } from '@ponder/core'

export default createSchema((p) => ({
  AppConfigV1: p.createTable(
    {
      id: p.string(),
      requiredResponses: p.int(),
      optimisticSeconds: p.int(),
      guardFlag: p.int(),
      guard: p.string(),
      modules: p.string().list(),
      chainId: p.int(),
    },
    {
      chainIdIndex: p.index('chainId'),
      guardIndex: p.index('guard'),
    }
  ),

  Transaction: p.createTable(
    {
      id: p.string(),
      status: p.string().optional(),

      // DB fields, unrelated to event data
      createdAt: p.int().optional(),
      updatedAt: p.int().optional(),

      // InterchainEntry fields
      srcDbNonce: p.int().optional(),
      dstDbNonce: p.int().optional(),
      srcWriter: p.string().optional(),
      digest: p.string().optional(),
      entryValue: p.string().optional(),
      verifiedAt: p.int().optional(),
      srcModules: p.string().list().optional(),
      verifierModule: p.string().optional(),

      // InterchainTransactionSent/Received shared fields
      transactionId: p.string().optional(),
      srcChainId: p.int().optional(),
      dstChainId: p.int().optional(),
      srcSender: p.string().optional(),
      dstReceiver: p.string().optional(),

      // InterchainTransactionSent fields
      verificationFee: p.bigint().optional(),
      executionFee: p.bigint().optional(),
      options: p.string().optional(),
      message: p.string().optional(),
      sentAddress: p.string().optional(),
      sentBlockNumber: p.bigint().optional(),
      sentTransactionHash: p.string().optional(),
      sentTimestamp: p.int().optional(),

      sentFrom: p.string().optional(),
      sentTo: p.string().optional(),
      sentGasProvided: p.bigint().optional(),
      sentValue: p.bigint().optional(),

      // InterchainTransactionReceived fields
      receivedAddress: p.string().optional(),
      receivedBlockNumber: p.bigint().optional(),
      receivedTransactionHash: p.string().optional(),
      receivedTimestamp: p.int().optional(),

      receivedTo: p.string().optional(),
      receivedGasProvided: p.bigint().optional(),
      receivedValue: p.bigint().optional(),
      executor: p.string().optional(),

      // Expresses whether transaction has been finalized (received)
      finalized: p.boolean(),

      // Relational DB fields
      appConfigV1Id: p.string().references('AppConfigV1.id').optional(),
      appConfigV1: p.one('appConfigV1Id'),
    },
    {
      statusIndex: p.index('status'),
      srcDbNonceIndex: p.index('srcDbNonce'),
      dstDbNonceIndex: p.index('dstDbNonce'),
      srcWriterIndex: p.index('srcWriter'),
      digestIndex: p.index('digest'),
      entryValueIndex: p.index('entryValue'),
      verifiedAtIndex: p.index('verifiedAt'),
      srcModulesIndex: p.index('srcModules'),
      transactionIdIndex: p.index('transactionId'),
      srcChainIdIndex: p.index('srcChainId'),
      dstChainIdIndex: p.index('dstChainId'),
      srcSenderIndex: p.index('srcSender'),
      dstReceiverIndex: p.index('dstReceiver'),
      sentAddressIndex: p.index('sentAddress'),
      sentBlockNumberIndex: p.index('sentBlockNumber'),
      sentTransactionHashIndex: p.index('sentTransactionHash'),
      sentTimestampIndex: p.index('sentTimestamp'),
      receivedAddressIndex: p.index('receivedAddress'),
      receivedBlockNumberIndex: p.index('receivedBlockNumber'),
      receivedTransactionHashIndex: p.index('receivedTransactionHash'),
      receivedTimestampIndex: p.index('receivedTimestamp'),
      verifierModuleIndex: p.index('verifierModule'),
      executorIndex: p.index('executor'),
      appConfigV1IdIndex: p.index('appConfigV1Id'),
    }
  ),
}))