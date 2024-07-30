export const FastBridgeV2Abi = [
    {
      inputs: [
        { internalType: 'address', name: '_owner', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'AccessControlBadConfirmation',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'bytes32', name: 'neededRole', type: 'bytes32' },
      ],
      name: 'AccessControlUnauthorizedAccount',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'target', type: 'address' },
      ],
      name: 'AddressEmptyCode',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'AddressInsufficientBalance',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AmountIncorrect',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ChainIncorrect',
      type: 'error',
    },
    {
      inputs: [],
      name: 'DeadlineExceeded',
      type: 'error',
    },
    {
      inputs: [],
      name: 'DeadlineNotExceeded',
      type: 'error',
    },
    {
      inputs: [],
      name: 'DeadlineTooShort',
      type: 'error',
    },
    {
      inputs: [],
      name: 'DisputePeriodNotPassed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'DisputePeriodPassed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'FailedInnerCall',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MsgValueIncorrect',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'token', type: 'address' },
      ],
      name: 'SafeERC20FailedOperation',
      type: 'error',
    },
    {
      inputs: [],
      name: 'SenderIncorrect',
      type: 'error',
    },
    {
      inputs: [],
      name: 'StatusIncorrect',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenNotContract',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransactionRelayed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ZeroAddress',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'relayer', type: 'address' },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        { indexed: false, internalType: 'address', name: 'token', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'BridgeDepositClaimed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        { indexed: false, internalType: 'address', name: 'token', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'BridgeDepositRefunded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'relayer', type: 'address' },
      ],
      name: 'BridgeProofDisputed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'relayer', type: 'address' },
        { indexed: false, internalType: 'bytes32', name: 'transactionHash', type: 'bytes32' },
      ],
      name: 'BridgeProofProvided',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'relayer', type: 'address' },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        { indexed: false, internalType: 'uint32', name: 'originChainId', type: 'uint32' },
        { indexed: false, internalType: 'address', name: 'originToken', type: 'address' },
        { indexed: false, internalType: 'address', name: 'destToken', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'originAmount', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'destAmount', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'chainGasAmount', type: 'uint256' },
      ],
      name: 'BridgeRelayed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
        { indexed: false, internalType: 'bytes', name: 'request', type: 'bytes' },
        { indexed: false, internalType: 'uint32', name: 'destChainId', type: 'uint32' },
        { indexed: false, internalType: 'address', name: 'originToken', type: 'address' },
        { indexed: false, internalType: 'address', name: 'destToken', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'originAmount', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'destAmount', type: 'uint256' },
        { indexed: false, internalType: 'bool', name: 'sendChainGas', type: 'bool' },
      ],
      name: 'BridgeRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: 'uint256', name: 'oldChainGasAmount', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'newChainGasAmount', type: 'uint256' },
      ],
      name: 'ChainGasAmountUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: 'uint256', name: 'oldFeeRate', type: 'uint256' },
        { indexed: false, internalType: 'uint256', name: 'newFeeRate', type: 'uint256' },
      ],
      name: 'FeeRateUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, internalType: 'address', name: 'token', type: 'address' },
        { indexed: false, internalType: 'address', name: 'recipient', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'FeesSwept',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
        { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'account', type: 'address' },
        { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { indexed: true, internalType: 'address', name: 'account', type: 'address' },
        { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DISPUTE_PERIOD',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'FEE_BPS',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'FEE_RATE_MAX',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'GOVERNOR_ROLE',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'GUARD_ROLE',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MIN_DEADLINE_PERIOD',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'REFUNDER_ROLE',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'REFUND_DELAY',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'RELAYER_ROLE',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'uint32', name: 'dstChainId', type: 'uint32' },
            { internalType: 'address', name: 'sender', type: 'address' },
            { internalType: 'address', name: 'to', type: 'address' },
            { internalType: 'address', name: 'originToken', type: 'address' },
            { internalType: 'address', name: 'destToken', type: 'address' },
            { internalType: 'uint256', name: 'originAmount', type: 'uint256' },
            { internalType: 'uint256', name: 'destAmount', type: 'uint256' },
            { internalType: 'bool', name: 'sendChainGas', type: 'bool' },
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          ],
          internalType: 'struct IFastBridge.BridgeParams',
          name: 'params',
          type: 'tuple',
        },
      ],
      name: 'bridge',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      name: 'bridgeProofs',
      outputs: [
        { internalType: 'uint96', name: 'timestamp', type: 'uint96' },
        { internalType: 'address', name: 'relayer', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      name: 'bridgeRelays',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      name: 'bridgeStatuses',
      outputs: [
        { internalType: 'enum FastBridge.BridgeStatus', name: '', type: 'uint8' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
        { internalType: 'address', name: 'relayer', type: 'address' },
      ],
      name: 'canClaim',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'chainGasAmount',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes', name: 'request', type: 'bytes' },
        { internalType: 'address', name: 'to', type: 'address' },
      ],
      name: 'claim',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'deployBlock',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'transactionId', type: 'bytes32' },
      ],
      name: 'dispute',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes', name: 'request', type: 'bytes' },
      ],
      name: 'getBridgeTransaction',
      outputs: [
        {
          components: [
            { internalType: 'uint32', name: 'originChainId', type: 'uint32' },
            { internalType: 'uint32', name: 'destChainId', type: 'uint32' },
            { internalType: 'address', name: 'originSender', type: 'address' },
            { internalType: 'address', name: 'destRecipient', type: 'address' },
            { internalType: 'address', name: 'originToken', type: 'address' },
            { internalType: 'address', name: 'destToken', type: 'address' },
            { internalType: 'uint256', name: 'originAmount', type: 'uint256' },
            { internalType: 'uint256', name: 'destAmount', type: 'uint256' },
            { internalType: 'uint256', name: 'originFeeAmount', type: 'uint256' },
            { internalType: 'bool', name: 'sendChainGas', type: 'bool' },
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
            { internalType: 'uint256', name: 'nonce', type: 'uint256' },
          ],
          internalType: 'struct IFastBridge.BridgeTransaction',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      ],
      name: 'getRoleAdmin',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'uint256', name: 'index', type: 'uint256' },
      ],
      name: 'getRoleMember',
      outputs: [
        { internalType: 'address', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'hasRole',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'nonce',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'protocolFeeRate',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'protocolFees',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes', name: 'request', type: 'bytes' },
        { internalType: 'bytes32', name: 'destTxHash', type: 'bytes32' },
      ],
      name: 'prove',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes', name: 'request', type: 'bytes' },
      ],
      name: 'refund',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes', name: 'request', type: 'bytes' },
      ],
      name: 'relay',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'callerConfirmation', type: 'address' },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'newChainGasAmount', type: 'uint256' },
      ],
      name: 'setChainGasAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'newFeeRate', type: 'uint256' },
      ],
      name: 'setProtocolFeeRate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' },
      ],
      name: 'supportsInterface',
      outputs: [
        { internalType: 'bool', name: '', type: 'bool' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'token', type: 'address' },
        { internalType: 'address', name: 'recipient', type: 'address' },
      ],
      name: 'sweepProtocolFees',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ]