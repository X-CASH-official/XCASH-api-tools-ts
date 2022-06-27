export interface BlockchainError {
    error: {
        code: number;
        message: string;
    };
    id: number;
    jsonrpc: string;
}
export interface BlockchainGetBlockCount {
    id: string;
    jsonrpc: string;
    result: {
        count: number;
        status: string;
    };
}
export interface BlockchainGetBlockHash {
    id: string;
    jsonrpc: string;
    result: string;
}
export interface BlockchainGetBlockTemplate {
    id: string;
    jsonrpc: string;
    result: {
        blockhashing_blob: string;
        blocktemplate_blob: string;
        difficulty: number;
        expected_reward: number;
        height: number;
        prev_hash: string;
        reserved_offset: number;
        status: string;
        untrusted: boolean;
    };
}
export interface BlockchainGetLastBlockHeader {
    id: string;
    jsonrpc: string;
    result: {
        block_header: {
            block_size: number;
            block_weight: number;
            cumulative_difficulty: number;
            depth: number;
            difficulty: number;
            hash: string;
            height: number;
            major_version: number;
            minor_version: number;
            nonce: number;
            num_txes: number;
            orphan_status: boolean;
            pow_hash: string;
            prev_hash: string;
            reward: number;
            timestamp: number;
        };
        status: string;
        untrusted: boolean;
    };
}
export interface BlockchainGetBlockHeaderByHash {
    id: string;
    jsonrpc: string;
    result: {
        block_header: {
            block_size: number;
            block_weight: number;
            cumulative_difficulty: number;
            depth: number;
            difficulty: number;
            hash: string;
            height: number;
            major_version: number;
            minor_version: number;
            nonce: number;
            num_txes: number;
            orphan_status: boolean;
            pow_hash: string;
            prev_hash: string;
            reward: number;
            timestamp: number;
        };
        status: string;
        untrusted: boolean;
    };
}
export interface BlockchainGetBlockHeaderByHeight {
    id: string;
    jsonrpc: string;
    result: {
        block_header: {
            block_size: number;
            block_weight: number;
            cumulative_difficulty: number;
            depth: number;
            difficulty: number;
            hash: string;
            height: number;
            major_version: number;
            minor_version: number;
            nonce: number;
            num_txes: number;
            orphan_status: boolean;
            pow_hash: string;
            prev_hash: string;
            reward: number;
            timestamp: number;
        };
        status: string;
        untrusted: boolean;
    };
}
export interface BlockchainGetBlockHeadersRange {
    id: string;
    jsonrpc: string;
    result: {
        headers: [
            {
                block_size: number;
                block_weight: number;
                cumulative_difficulty: number;
                depth: number;
                difficulty: number;
                hash: string;
                height: number;
                major_version: number;
                minor_version: number;
                nonce: number;
                num_txes: number;
                orphan_status: boolean;
                pow_hash: string;
                prev_hash: string;
                reward: number;
                timestamp: number;
            }
        ];
        status: string;
        untrusted: boolean;
    };
}
export interface BlockchainGetBlock {
    id: string;
    jsonrpc: string;
    result: {
        blob: string;
        block_header: {
            block_size: number;
            block_weight: number;
            cumulative_difficulty: number;
            depth: number;
            difficulty: number;
            hash: string;
            height: number;
            major_version: number;
            minor_version: number;
            nonce: number;
            num_txes: number;
            orphan_status: boolean;
            pow_hash: string;
            prev_hash: string;
            reward: number;
            timestamp: number;
        };
        json: string;
        miner_tx_hash: string;
        status: string;
        untrusted: boolean;
    };
}
export interface BlockchainGetInfo {
    id: string;
    jsonrpc: string;
    result: {
        alt_blocks_count: number;
        block_size_limit: number;
        block_size_median: number;
        block_weight_limit: number;
        block_weight_median: number;
        bootstrap_daemon_address: string;
        cumulative_difficulty: number;
        database_size: number;
        difficulty: number;
        free_space: number;
        grey_peerlist_size: number;
        height: number;
        height_without_bootstrap: number;
        incoming_connections_count: number;
        mainnet: boolean;
        nettype: string;
        offline: boolean;
        outgoing_connections_count: number;
        rpc_connections_count: number;
        stagenet: boolean;
        start_time: number;
        status: string;
        target: number;
        target_height: number;
        testnet: boolean;
        top_block_hash: string;
        tx_count: number;
        tx_pool_size: number;
        untrusted: boolean;
        update_available: boolean;
        was_bootstrap_ever_used: boolean;
        white_peerlist_size: number;
    };
}
export interface BlockchainHardForkInfo {
    id: string;
    jsonrpc: string;
    result: {
        earliest_height: number;
        enabled: boolean;
        state: number;
        status: string;
        threshold: number;
        untrusted: boolean;
        version: number;
        votes: number;
        voting: number;
        window: number;
    };
}
export interface BlockchainGetVersion {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
        untrusted: boolean;
        version: number;
    };
}
export interface BlockchainGetTx {
    status: string;
    txs: [
        {
            as_hex: string;
            as_json: string;
            block_height: number;
            block_timestamp: number;
            double_spend_seen: boolean;
            in_pool: boolean;
            output_indices: number[];
            tx_hash: string;
        }
    ];
    txs_as_hex: string[];
    txs_as_json: string[];
    untrusted: boolean;
}
export interface DPOPSVote {
    id: string;
    jsonrpc: string;
    result: {
        vote_status: string;
    };
}
export interface DPOPSRevote {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface DPOPSVoteStatus {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface DPOPSDelegateRegister {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface DPOPSDelegateUpdate {
    id: string;
    jsonrpc: string;
    result: {
        delegate_update_status: string;
    };
}
export interface BlockchainGetBalance {
    id: string;
    jsonrpc: string;
    result: {
        balance: number;
        multisig_import_needed: boolean;
        per_subaddress: [
            {
                address: string;
                address_index: number;
                balance: number;
                label: string;
                num_unspent_outputs: number;
                unlocked_balance: number;
            }
        ];
        unlocked_balance: number;
    };
}
export interface BlockchainGetAddress {
    id: string;
    jsonrpc: string;
    result: {
        address: string;
        addresses: [
            {
                address: string;
                address_index: number;
                label: string;
                used: boolean;
            }
        ];
    };
}
export interface BlockchainGetAddressIndex {
    id: string;
    jsonrpc: string;
    result: {
        index: {
            major: number;
            minor: number;
        };
    };
}
export interface BlockchainCreateAddress {
    id: string;
    jsonrpc: string;
    result: {
        address: string;
        address_index: number;
    };
}
export interface BlockchainGetHeight {
    id: string;
    jsonrpc: string;
    result: {
        height: number;
    };
}
export interface BlockchainTransferSplit {
    id: string;
    jsonrpc: string;
    result: {
        amount_list: number[];
        fee_list: number[];
        multisig_txset: string;
        tx_hash_list: string[];
        tx_key_list: string[];
        unsigned_txset: string;
    };
}
export interface BlockchainSweepAll {
    id: string;
    jsonrpc: string;
    result: {
        amount_list: number[];
        fee_list: number[];
        multisig_txset: string;
        tx_hash_list: string[];
        tx_key_list: string[];
        unsigned_txset: string;
    };
}
export interface BlockchainGetPayments {
    id: string;
    jsonrpc: string;
    result: {
        payments: [
            {
                address: string;
                amount: number;
                block_height: number;
                payment_id: string;
                subaddr_index: {
                    major: number;
                    minor: number;
                };
            }
        ];
    };
}
export interface BlockchainIncomingTransfers {
    id: string;
    jsonrpc: string;
    result: {
        payments: [
            {
                address: string;
                amount: number;
                block_height: number;
                payment_id: string;
                subaddr_index: {
                    major: number;
                    minor: number;
                };
            }
        ];
    };
}
export interface BlockchainQueryKey {
    id: string;
    jsonrpc: string;
    result: {
        key: string;
    };
}
export interface BlockchainMakeIntegratedAddress {
    id: string;
    jsonrpc: string;
    result: {
        integrated_address: string;
        payment_id: string;
    };
}
export interface BlockchainSplitIntegratedAddress {
    id: string;
    jsonrpc: string;
    result: {
        is_subaddress: boolean;
        payment_id: string;
        standard_address: string;
    };
}
export interface BlockchainRescanBlockchain {
    id: string;
    jsonrpc: string;
    result: {};
}
export interface BlockchainGetTxKey {
    id: string;
    jsonrpc: string;
    result: {
        tx_key: string;
    };
}
export interface BlockchainCheckTxKey {
    id: string;
    jsonrpc: string;
    result: {
        confirmations: number;
        in_pool: boolean;
        received: number;
    };
}
export interface BlockchainGetTxProof {
    id: string;
    jsonrpc: string;
    result: {
        signature: string;
    };
}
export interface BlockchainCheckTxProof {
    id: string;
    jsonrpc: string;
    result: {
        confirmations: number;
        good: boolean;
        in_pool: boolean;
        received: number;
    };
}
export interface BlockchainGetSpendProof {
    id: string;
    jsonrpc: string;
    result: {
        signature: string;
    };
}
export interface BlockchainCheckSpendProof {
    id: string;
    jsonrpc: string;
    result: {
        good: boolean;
    };
}
export interface BlockchainGetReserveProof {
    id: string;
    jsonrpc: string;
    result: {
        signature: string;
    };
}
export interface BlockchainCheckReserveProof {
    id: string;
    jsonrpc: string;
    result: {
        good: boolean;
        spent: number;
        total: number;
    };
}
export interface BlockchainSign {
    id: string;
    jsonrpc: string;
    result: {
        signature: string;
    };
}
export interface BlockchainVerify {
    id: string;
    jsonrpc: string;
    result: {
        good: boolean;
    };
}
export interface BlockchainRescanSpent {
    id: string;
    jsonrpc: string;
    result: {};
}
export interface BlockchainValidateAddress {
    id: string;
    jsonrpc: string;
    result: {
        valid: boolean;
    };
}
export interface BlockchainCreateWallet {
    id: string;
    jsonrpc: string;
    result: {};
}
export interface BlockchainOpenWallet {
    id: string;
    jsonrpc: string;
    result: {};
}
export interface BlockchainCloseWallet {
    id: string;
    jsonrpc: string;
    result: {};
}
export interface BlockchainChangeWalletPassword {
    id: string;
    jsonrpc: string;
    result: {};
}
export interface NamespaceUpdateRemoteData {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface NamespaceRemoteDataSaveName {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface NamespaceRemoteDataPurchaseName {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface NamespaceRemoteDataDelegateSetAmount {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface NamespaceRemoteDataRenewalStart {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface NamespaceRemoteDataRenewalEnd {
    id: string;
    jsonrpc: string;
    result: {
        status: string;
    };
}
export interface APIBlockchainStats {
    height: number;
    hash: string;
    reward: number;
    size: number;
    version: number;
    versionBlockHeight: number;
    nextVersionBlockHeight: number;
    totalPublicTx: number;
    totalPrivateTx: number;
    circulatingSupply: number;
    generatedSupply: number;
    totalSupply: number;
    emissionReward: number;
    emissionHeight: number;
    emissionTime: number;
    inflationHeight: number;
    inflationTime: number;
}
export interface APIBlockchainBlockData {
    height: number;
    hash: string;
    reward: number;
    time: number;
    xcashDPOPS: boolean;
    delegateName: string;
    tx: string[];
}
export interface APIBlockchainTxData {
    height: number;
    confirmations: number;
    time: number;
    type: string;
    sender: string;
    receiver: string;
    amount: number;
}
export interface APIBlockchainProveTx {
    valid: boolean;
    amount: number;
}
export interface APIBlockchainProveBalance {
    amount: number;
}
export declare type APIBlockchainTxHistory = [
    {
        tx: string;
        key: string;
        sender: string;
        receiver: string;
        amount: number;
        height: number;
        time: number;
    }
];
export interface APIBlockchainValidateAddress {
    valid: boolean;
}
export interface APIBlockchainCreateIntegratedAddress {
    integratedAddress: string;
    paymentId: string;
}
export interface APIDPOPSStats {
    mostTotalRoundsDelegateName: string;
    mostTotalRounds: number;
    bestBlockVerifierOnlinePercentageDelegateName: string;
    bestBlockVerifierOnlinePercentage: number;
    mostBlockProducerTotalRoundsDelegateName: string;
    mostBlockProducerTotalRounds: number;
    totalVotes: number;
    totalVoters: number;
    averageVote: number;
    votePercentage: number;
    roundNumber: number;
    totalRegisteredDelegates: number;
    totalOnlineDelegates: number;
    currentBlockVerifiersMaximumAmount: number;
    currentBlockVerifiersValidAmount: number;
}
interface DelegateData {
    votes: number;
    voters: number;
    IPAdress: string;
    delegateName: string;
    sharedDelegate: boolean;
    seedNode: boolean;
    online: boolean;
    fee: number;
    totalRounds: number;
    totalBlockProducerRounds: number;
    onlinePercentage: number;
}
export interface APIDPOPSDelegates extends Array<DelegateData> {
}
export interface APIDPOPSDelegate {
    votes: number;
    voters: number;
    IPAdress: string;
    delegateName: string;
    publicAddress: string;
    about: string;
    website: string;
    team: string;
    specifications: string;
    sharedDelegate: boolean;
    seedNode: boolean;
    online: boolean;
    fee: number;
    totalRounds: number;
    totalBlockProducerRounds: number;
    onlinePercentage: number;
    rank: number;
}
export interface APIDPOPSDelegateRoundStats {
    totalBlocksProduced: number;
    totalBlockRewards: number;
    averagePercentage: number;
    averageTime: number;
    blocksProduced: [
        {
            blockHeight: number;
            blockReward: number;
            time: number;
        }
    ];
}
interface DelegateVote {
    publicAddress: string;
    amount: number;
    reserveProof: string;
}
export interface APIDPOPSDelegatesVotes extends Array<DelegateVote> {
}
export interface APIDPOPSVoteDetails {
    delegateName: string;
    amount: number;
}
export interface APIDPOPSRoundDetails {
    delegates: string[];
}
export interface APIDPOPSLastBlockProducer {
    lastBlockProducer: string;
}
export interface APINamespaceStats {
    totalNamesRegisteredOrRenewed: number;
    totalVolume: number;
}
interface RegistredDelegate {
    delegateName: string;
    amount: number;
}
export interface APINamespaceRegisteredDelegates extends Array<RegistredDelegate> {
}
export interface APINamespaceDelegates {
    delegateName: string;
    publicAddress: string;
    amount: number;
    totalNamesRegisteredOrRenewed: number;
    totalVolume: number;
}
export interface APINamespaceName {
    address: string;
    saddress: string;
    paddress: string;
    expires: number;
    delegateName: string;
    delegateAmount: number;
}
export interface APINamespaceNameStatus {
    status: boolean;
}
export interface APINamespaceAddressStatus {
    status: string;
}
export interface APINamespaceNameToAddress {
    address: string;
    saddress: string;
    paddress: string;
}
export interface APINamespaceAddressToName {
    name: string;
    extension: string;
}
export interface APIXpaymentTwitterStats {
    totalUsers: number;
    avgTipAmount: number;
    totalDeposits: number;
    totalWithdraws: number;
    totalTipsPublic: number;
    totalTipsPrivate: number;
    totalVolumeSentPublic: number;
    totalVolumeSentPrivate: number;
    totalTipsLastDayPublic: number;
    totalTipsLastDayPrivate: number;
    totalVolumeSentLastDayPublic: number;
    totalVolumeSentLastDayPrivate: number;
    totalTipsLastHourPublic: number;
    totalTipsLastHourPrivate: number;
    totalVolumeSentLastHourPublic: number;
    totalVolumeSentLastHourPrivate: number;
}
interface StatsPerDay {
    time: number;
    amount: number;
    volume: number;
}
export interface APIXpaymentTwitterStatsPerDay extends Array<StatsPerDay> {
}
export interface APIXpaymentTwitterTopStats {
    topTips: [
        {
            username: string;
            tips: number;
        }
    ];
    topVolumes: [
        {
            username: string;
            volume: number;
        }
    ];
}
interface RecentTips {
    tweetId: string;
    fromUser: string;
    toUser: string;
    amount: number;
    time: number;
    type: string;
}
export interface APIXpaymentTwitterRecentTips extends Array<RecentTips> {
}
export {};
