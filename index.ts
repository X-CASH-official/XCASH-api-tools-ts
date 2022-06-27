import * as xcashInterfaces from './interfaces';
export * as xcashInterfaces from './interfaces';

var XCASH_DAEMON_ADDRESS = "us1.xcash.foundation:18281";
var XCASH_WALLET_ADDRESS = "us1.xcash.foundation:18289";
const XCASH_GLOBAL_API_ADDRESS = "https://api.xcash.foundation"

export function Initialize(data1:string, data2:string): void
{
  XCASH_DAEMON_ADDRESS = data1 == "" ? XCASH_DAEMON_ADDRESS : data1;
  XCASH_WALLET_ADDRESS = data2 == "" ? XCASH_WALLET_ADDRESS : data2;
}

export async function Blockchain_get_block_count(): Promise<xcashInterfaces.BlockchainGetBlockCount>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_count"}`
    });
    const result:xcashInterfaces.BlockchainGetBlockCount = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBlockCount = ({} as any) as xcashInterfaces.BlockchainGetBlockCount;
    return result;
  }
}

export async function Blockchain_get_block_hash(): Promise<xcashInterfaces.BlockchainGetBlockHash>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_count"}`
    });
    const result:xcashInterfaces.BlockchainGetBlockHash = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBlockHash = ({} as any) as xcashInterfaces.BlockchainGetBlockHash;
    return result;
  }
}

export async function Blockchain_get_block_template(height:number): Promise<xcashInterfaces.BlockchainGetBlockTemplate>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"on_get_block_hash","params":[${height}]}`
    });
    const result:xcashInterfaces.BlockchainGetBlockTemplate = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBlockTemplate = ({} as any) as xcashInterfaces.BlockchainGetBlockTemplate;
    return result;
  }
}

export async function Blockchain_get_last_block_header(): Promise<xcashInterfaces.BlockchainGetLastBlockHeader>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_last_block_header"}`
    });
    const result:xcashInterfaces.BlockchainGetLastBlockHeader = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetLastBlockHeader = ({} as any) as xcashInterfaces.BlockchainGetLastBlockHeader;
    return result;
  }
}

export async function Blockchain_get_block_header_by_hash(height:number): Promise<xcashInterfaces.BlockchainGetBlockHeaderByHash>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_hash","params":{"hash":"${height}"}}`
    });
    const result:xcashInterfaces.BlockchainGetBlockHeaderByHash = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBlockHeaderByHash = ({} as any) as xcashInterfaces.BlockchainGetBlockHeaderByHash;
    return result;
  }
}

export async function Blockchain_get_block_header_by_height(height:number): Promise<xcashInterfaces.BlockchainGetBlockHeaderByHeight>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_height","params":{"height":${height}}}`
    });
    const result:xcashInterfaces.BlockchainGetBlockHeaderByHeight = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBlockHeaderByHeight = ({} as any) as xcashInterfaces.BlockchainGetBlockHeaderByHeight;
    return result;
  }
}

export async function Blockchain_get_block_headers_range(startHeight:number, endHeight:number): Promise<xcashInterfaces.BlockchainGetBlockHeadersRange>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block_headers_range","params":{"start_height":${startHeight},"end_height":${endHeight}}}`
    });
    const result:xcashInterfaces.BlockchainGetBlockHeadersRange = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBlockHeadersRange = ({} as any) as xcashInterfaces.BlockchainGetBlockHeadersRange;
    return result;
  }
}

export async function Blockchain_get_block(height:number): Promise<xcashInterfaces.BlockchainGetBlock>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_block","params":{"height":${height}}}`
    });
    const result:xcashInterfaces.BlockchainGetBlock = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBlock = ({} as any) as xcashInterfaces.BlockchainGetBlock;
    return result;
  }
}

export async function Blockchain_get_info(): Promise<xcashInterfaces.BlockchainGetInfo>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_info"}`
    });
    const result:xcashInterfaces.BlockchainGetInfo = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetInfo = ({} as any) as xcashInterfaces.BlockchainGetInfo;
    return result;
  }
}

export async function Blockchain_hard_fork_info(): Promise<xcashInterfaces.BlockchainHardForkInfo>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"hard_fork_info"}`
    });
    const result:xcashInterfaces.BlockchainHardForkInfo = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainHardForkInfo = ({} as any) as xcashInterfaces.BlockchainHardForkInfo;
    return result;
  }
}

export async function Blockchain_version(): Promise<xcashInterfaces.BlockchainGetVersion>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_version"}`
    });
    const result:xcashInterfaces.BlockchainGetVersion = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetVersion = ({} as any) as xcashInterfaces.BlockchainGetVersion;
    return result;
  }
}












export async function Blockchain_get_tx(tx:string): Promise<xcashInterfaces.BlockchainGetTx>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"txs_hashes":["${tx}"],"decode_as_json":true}`
    });
    const result:xcashInterfaces.BlockchainGetTx = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetTx = ({} as any) as xcashInterfaces.BlockchainGetTx;
    return result;
  }
}

export async function DPOPS_vote(delegate:string, amount:number): Promise<xcashInterfaces.DPOPSVote>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"vote","params":{"delegate_data":"${delegate}","amount":"${amount}"}}`
    });
    const result:xcashInterfaces.DPOPSVote = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.DPOPSVote = ({} as any) as xcashInterfaces.DPOPSVote;
    return result;
  }
}

export async function DPOPS_revote(amount:number): Promise<xcashInterfaces.DPOPSRevote>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"vote","params":{"amount":"${amount}"}}`
    });
    const result:xcashInterfaces.DPOPSRevote = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.DPOPSRevote = ({} as any) as xcashInterfaces.DPOPSRevote;
    return result;
  }
}

export async function DPOPS_vote_status(): Promise<xcashInterfaces.DPOPSVoteStatus>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"vote_status"}`
    });
    const result:xcashInterfaces.DPOPSVoteStatus = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.DPOPSVoteStatus = ({} as any) as xcashInterfaces.DPOPSVoteStatus;
    return result;
  }
}

export async function DPOPS_delegate_register(delegate:string, IP:string, key:string): Promise<xcashInterfaces.DPOPSDelegateRegister>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"delegate_register","params":{"delegate_name":"${delegate}","delegate_IP_address":"${IP}","delegates_public_key":"${key}"}}`
    });
    const result:xcashInterfaces.DPOPSDelegateRegister = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.DPOPSDelegateRegister = ({} as any) as xcashInterfaces.DPOPSDelegateRegister;
    return result;
  }
}

export async function DPOPS_delegate_update(item:string, value:string): Promise<xcashInterfaces.DPOPSDelegateUpdate>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"delegate_update","params":{"item":"${item}","value":"${value}"}}`
    });
    const result:xcashInterfaces.DPOPSDelegateUpdate = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.DPOPSDelegateUpdate = ({} as any) as xcashInterfaces.DPOPSDelegateUpdate;
    return result;
  }
}

export async function Blockchain_get_balance(): Promise<xcashInterfaces.BlockchainGetBalance>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_balance"}`
    });
    const result:xcashInterfaces.BlockchainGetBalance = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetBalance = ({} as any) as xcashInterfaces.BlockchainGetBalance;
    return result;
  }
}

export async function Blockchain_get_address(): Promise<xcashInterfaces.BlockchainGetAddress>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_address"}`
    });
    const result:xcashInterfaces.BlockchainGetAddress = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetAddress = ({} as any) as xcashInterfaces.BlockchainGetAddress;
    return result;
  }
}

export async function Blockchain_get_address_index(address:string): Promise<xcashInterfaces.BlockchainGetAddressIndex>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_address_index","params":{"address":"${address}"}}`
    });
    const result:xcashInterfaces.BlockchainGetAddressIndex = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetAddressIndex = ({} as any) as xcashInterfaces.BlockchainGetAddressIndex;
    return result;
  }
}

export async function Blockchain_create_address(index:number): Promise<xcashInterfaces.BlockchainCreateAddress>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"create_address","params":{"account_index":${index}}}`
    });
    const result:xcashInterfaces.BlockchainCreateAddress = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainCreateAddress = ({} as any) as xcashInterfaces.BlockchainCreateAddress;
    return result;
  }
}

export async function Blockchain_get_height(): Promise<xcashInterfaces.BlockchainGetHeight>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_height"}`
    });
    const result:xcashInterfaces.BlockchainGetHeight = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetHeight = ({} as any) as xcashInterfaces.BlockchainGetHeight;
    return result;
  }
}

export async function Blockchain_transfer_split(address:string[], amount:number[]): Promise<xcashInterfaces.BlockchainTransferSplit>
{ 
  try
  {
    let data = `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[`;
    for (let count = 0; count < address.length; count++)
    {
      data += `{"amount":${amount[count]},"address":"${address[count]}"},`;
    }
    data = data.slice(0,-1);
    data += `],"ring_size":21,"get_tx_keys": true}}`;

    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: data
    });
    const result:xcashInterfaces.BlockchainTransferSplit = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainTransferSplit = ({} as any) as xcashInterfaces.BlockchainTransferSplit;
    return result;
  }
}

export async function Blockchain_sweep_all(address:string): Promise<xcashInterfaces.BlockchainSweepAll>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"address":"${address}","ring_size":21}}`
    });
    const result:xcashInterfaces.BlockchainSweepAll = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainSweepAll = ({} as any) as xcashInterfaces.BlockchainSweepAll;
    return result;
  }
}

export async function Blockchain_get_payments(payment_id:string): Promise<xcashInterfaces.BlockchainGetPayments>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_payments","params":{"payment_id":"${payment_id}"}}`
    });
    const result:xcashInterfaces.BlockchainGetPayments = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetPayments = ({} as any) as xcashInterfaces.BlockchainGetPayments;
    return result;
  }
}

export async function Blockchain_incoming_transfers(transfer_type:string)
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"${transfer_type}"}}`
    });
    const result:xcashInterfaces.BlockchainIncomingTransfers = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainIncomingTransfers = ({} as any) as xcashInterfaces.BlockchainIncomingTransfers;
    return result;
  }
}

export async function Blockchain_query_key(key_type:string): Promise<xcashInterfaces.BlockchainQueryKey>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"${key_type}"}}`
    });
    const result:xcashInterfaces.BlockchainQueryKey = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainQueryKey = ({} as any) as xcashInterfaces.BlockchainQueryKey;
    return result;
  }
}

export async function Blockchain_make_integrated_address(address:string, payment_id:string): Promise<xcashInterfaces.BlockchainMakeIntegratedAddress>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"standard_address":"${address}","payment_id":"${payment_id}"}}`
    });
    const result:xcashInterfaces.BlockchainMakeIntegratedAddress = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainMakeIntegratedAddress = ({} as any) as xcashInterfaces.BlockchainMakeIntegratedAddress;
    return result;
  }
}

export async function Blockchain_split_integrated_address(integrated_address:string): Promise<xcashInterfaces.BlockchainSplitIntegratedAddress>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"split_integrated_address","params":{"integrated_address":"${integrated_address}"}}`
    });
    const result:xcashInterfaces.BlockchainSplitIntegratedAddress = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainSplitIntegratedAddress = ({} as any) as xcashInterfaces.BlockchainSplitIntegratedAddress;
    return result;
  }
}

export async function Blockchain_rescan_blockchain(): Promise<xcashInterfaces.BlockchainRescanBlockchain>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain"}`
    });
    const result:xcashInterfaces.BlockchainRescanBlockchain = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainRescanBlockchain = ({} as any) as xcashInterfaces.BlockchainRescanBlockchain;
    return result;
  }
}

export async function Blockchain_get_tx_key(tx:string): Promise<xcashInterfaces.BlockchainGetTxKey>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_tx_key","params":{"txid":"${tx}"}}`
    });
    const result:xcashInterfaces.BlockchainGetTxKey = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetTxKey = ({} as any) as xcashInterfaces.BlockchainGetTxKey;
    return result;
  }
}

export async function Blockchain_check_tx_key(tx:string, key:string, address:string): Promise<xcashInterfaces.BlockchainCheckTxKey>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_tx_key","params":{"txid":"${tx}","tx_key":"${key}","address":"${address}"}}`
    });
    const result:xcashInterfaces.BlockchainCheckTxKey = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainCheckTxKey = ({} as any) as xcashInterfaces.BlockchainCheckTxKey;
    return result;
  }
}

export async function Blockchain_get_tx_proof(tx:string, address:string, message:string): Promise<xcashInterfaces.BlockchainGetTxProof>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_tx_proof","params":{"txid":"${tx}","address":"${address}","message":"${message}"}}`
    });
    const result:xcashInterfaces.BlockchainGetTxProof = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetTxProof = ({} as any) as xcashInterfaces.BlockchainGetTxProof;
    return result;
  }
}

export async function Blockchain_check_tx_proof(tx:string, address:string, message:string, signature:string): Promise<xcashInterfaces.BlockchainCheckTxProof>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_tx_proof","params":{"txid":"${tx}","address":"${address}","message":"${message}","signature":"${signature}"}}`
    });
    const result:xcashInterfaces.BlockchainCheckTxProof = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.BlockchainCheckTxProof = ({} as any) as xcashInterfaces.BlockchainCheckTxProof;
    return result;
  }
}

export async function Blockchain_get_spend_proof(tx:string, message:string): Promise<xcashInterfaces.BlockchainGetSpendProof>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_spend_proof","params":{"txid":"${tx}","message":"${message}"}}`
    });
    const result:xcashInterfaces.BlockchainGetSpendProof = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainGetSpendProof = ({} as any) as xcashInterfaces.BlockchainGetSpendProof;
    return result;
  }
}

export async function Blockchain_check_spend_proof(tx:string, message:string, signature:string): Promise<xcashInterfaces.BlockchainCheckSpendProof>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_spend_proof","params":{"txid":"${tx}","message":"${message}","signature":"${signature}"}}`
    });
    const result:xcashInterfaces.BlockchainCheckSpendProof = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainCheckSpendProof = ({} as any) as xcashInterfaces.BlockchainCheckSpendProof;
    return result;
  }
}

export async function Blockchain_get_reserve_proof(all:string, amount:string, message:string): Promise<xcashInterfaces.BlockchainGetReserveProof>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":${all},"amount":${amount},"message":"${message}"}}`
    });
    const result:xcashInterfaces.BlockchainGetReserveProof = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.BlockchainGetReserveProof = ({} as any) as xcashInterfaces.BlockchainGetReserveProof;
    return result;
  }
}

export async function Blockchain_check_reserve_proof(address:string, signature:string, message:string): Promise<xcashInterfaces.BlockchainCheckReserveProof>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"${address}","signature":"${signature}","message":"${message}"}}`
    });
    const result:xcashInterfaces.BlockchainCheckReserveProof = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainCheckReserveProof = ({} as any) as xcashInterfaces.BlockchainCheckReserveProof;
    return result;
  }
}

export async function Blockchain_sign(message:string): Promise<xcashInterfaces.BlockchainSign>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"${message}"}}`
    });
    const result:xcashInterfaces.BlockchainSign = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainSign = ({} as any) as xcashInterfaces.BlockchainSign;
    return result;
  }
}

export async function Blockchain_verify(message:string, address:string, signature:string): Promise<xcashInterfaces.BlockchainVerify>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"verify","params":{"data":"${message}","address":"${address}","signature":"${signature}"}}`
    });
    const result:xcashInterfaces.BlockchainVerify = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainVerify = ({} as any) as xcashInterfaces.BlockchainVerify;
    return result;
  }
}

export async function Blockchain_rescan_spent(): Promise<xcashInterfaces.BlockchainRescanSpent>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"rescan_spent"}`
    });
    const result:xcashInterfaces.BlockchainRescanSpent = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainRescanSpent = ({} as any) as xcashInterfaces.BlockchainRescanSpent;
    return result;
  }
}

export async function Blockchain_validate_address(address:string): Promise<xcashInterfaces.BlockchainValidateAddress>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"validate_address","params":{"address":"${address}"}}`
    });
   const result:xcashInterfaces.BlockchainValidateAddress = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.BlockchainValidateAddress = ({} as any) as xcashInterfaces.BlockchainValidateAddress;
    return result;
  }
}

export async function Blockchain_create_wallet(filename:string, password:string): Promise<xcashInterfaces.BlockchainCreateWallet>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"create_wallet","params":{"filename":"${filename}","password":"${password}","language":"English"}}`
    });
    const result:xcashInterfaces.BlockchainCreateWallet = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainCreateWallet = ({} as any) as xcashInterfaces.BlockchainCreateWallet;
    return result;
  }
}

export async function Blockchain_open_wallet(filename:string, password:string): Promise<xcashInterfaces.BlockchainOpenWallet>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"open_wallet","params":{"filename":"` + filename + `","password":"` + password + `"}}`
    });
    const result:xcashInterfaces.BlockchainOpenWallet = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainOpenWallet = ({} as any) as xcashInterfaces.BlockchainOpenWallet;
    return result;
  }
}

export async function Blockchain_close_wallet(): Promise<xcashInterfaces.BlockchainCloseWallet>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"close_wallet"}`
    });
    const result:xcashInterfaces.BlockchainCloseWallet = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.BlockchainCloseWallet = ({} as any) as xcashInterfaces.BlockchainCloseWallet;
    return result;
  }
}

export async function Blockchain_change_wallet_password(old_password:string, new_password:string): Promise<xcashInterfaces.BlockchainChangeWalletPassword>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"${old_password}","new_password":"${new_password}"}}`
    });
    const result:xcashInterfaces.BlockchainChangeWalletPassword = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.BlockchainChangeWalletPassword = ({} as any) as xcashInterfaces.BlockchainChangeWalletPassword;
    return result;
  }
}

export async function Namespace_update_remote_data(item:string, value:string): Promise<xcashInterfaces.NamespaceUpdateRemoteData>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"update_remote_data","params":{"item":"${item}","value":"${value}"}}`
    });
    const result:xcashInterfaces.NamespaceUpdateRemoteData = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.NamespaceUpdateRemoteData = ({} as any) as xcashInterfaces.NamespaceUpdateRemoteData;
    return result;
  }
}

export async function Namespace_remote_data_save_name(name:string): Promise<xcashInterfaces.NamespaceRemoteDataSaveName>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_save_name","params":{"name":"${name}"}}`
    });
    const result:xcashInterfaces.NamespaceRemoteDataSaveName = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.NamespaceRemoteDataSaveName = ({} as any) as xcashInterfaces.NamespaceRemoteDataSaveName;
    return result;
  }
}

export async function Namespace_remote_data_purchase_name(saddress:string, saddress_signature:string, paddress:string, paddress_signature:string, tx_hash:string): Promise<xcashInterfaces.NamespaceRemoteDataPurchaseName>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_purchase_name","params":{"saddress":"${saddress}","saddress_signature":"${saddress_signature}","paddress":"${paddress}","paddress_signature":"${paddress_signature}","tx_hash":"${tx_hash}"}}`
    });
   const result:xcashInterfaces.NamespaceRemoteDataPurchaseName = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.NamespaceRemoteDataPurchaseName = ({} as any) as xcashInterfaces.NamespaceRemoteDataPurchaseName;
    return result;
  }
}

export async function Namespace_remote_data_delegate_set_amount(amount:string): Promise<xcashInterfaces.NamespaceRemoteDataDelegateSetAmount>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_delegate_set_amount","params":{"amount":"${amount}"}}`
    });
    const result:xcashInterfaces.NamespaceRemoteDataDelegateSetAmount = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.NamespaceRemoteDataDelegateSetAmount = ({} as any) as xcashInterfaces.NamespaceRemoteDataDelegateSetAmount;
    return result;
  }
}

export async function Namespace_remote_data_renewal_start(): Promise<xcashInterfaces.NamespaceRemoteDataRenewalStart>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_renewal_start"}`
    });
    const result:xcashInterfaces.NamespaceRemoteDataRenewalStart = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.NamespaceRemoteDataRenewalStart = ({} as any) as xcashInterfaces.NamespaceRemoteDataRenewalStart;
    return result;
  }
}

export async function Namespace_remote_data_renewal_end(tx:string): Promise<xcashInterfaces.NamespaceRemoteDataRenewalEnd>
{ 
  try
  {
    const response = await fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_renewal_end","params":{"tx_hash":"${tx}"}}`
    });
    const result:xcashInterfaces.NamespaceRemoteDataRenewalEnd = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.NamespaceRemoteDataRenewalEnd = ({} as any) as xcashInterfaces.NamespaceRemoteDataRenewalEnd;
    return result;
  }
}





























export async function API_Blockchain_stats(): Promise<xcashInterfaces.APIBlockchainStats>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIBlockchainStats = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIBlockchainStats = ({} as any) as xcashInterfaces.APIBlockchainStats;
    return result;
  }
}

export async function API_Blockchain_block_data(height:number): Promise<xcashInterfaces.APIBlockchainBlockData>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/blocks/${height}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIBlockchainBlockData = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIBlockchainBlockData = ({} as any) as xcashInterfaces.APIBlockchainBlockData;
    return result;
  }
}

export async function API_Blockchain_tx_data(tx:string): Promise<xcashInterfaces.APIBlockchainTxData>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/tx/${tx}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIBlockchainTxData = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIBlockchainTxData = ({} as any) as xcashInterfaces.APIBlockchainTxData;
    return result;
  }
}

export async function API_Blockchain_prove_tx(tx:string, address:string, key:string): Promise<xcashInterfaces.APIBlockchainProveTx>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/tx/prove/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"tx":"${tx}","address":"${address}","key": "${key}"}`
    });
    const result:xcashInterfaces.APIBlockchainProveTx = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIBlockchainProveTx = ({} as any) as xcashInterfaces.APIBlockchainProveTx;
    return result;
  }
}

export async function API_Blockchain_prove_balance(address:string, signature:string): Promise<xcashInterfaces.APIBlockchainProveBalance>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/prove/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"address":"${address}","signature": "${signature}"}`
    });
    const result:xcashInterfaces.APIBlockchainProveBalance = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIBlockchainProveBalance = ({} as any) as xcashInterfaces.APIBlockchainProveBalance;
    return result;
  }
}

export async function API_Blockchain_tx_history(tx_type:string, address:string): Promise<xcashInterfaces.APIBlockchainTxHistory>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/history/${tx_type}/${address}/"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIBlockchainTxHistory = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.APIBlockchainTxHistory = ({} as any) as xcashInterfaces.APIBlockchainTxHistory;
    return result;
  }
}

export async function API_Blockchain_validate_address(address:string): Promise<xcashInterfaces.APIBlockchainValidateAddress>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/validate/${address}/"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIBlockchainValidateAddress = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIBlockchainValidateAddress = ({} as any) as xcashInterfaces.APIBlockchainValidateAddress;
    return result;
  }
}

export async function API_Blockchain_create_integrated_address(address:string, payment_id:string): Promise<xcashInterfaces.APIBlockchainCreateIntegratedAddress>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/createIntegrated/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"address":"${address}","paymentId": "${payment_id}"}`
    });
    const result:xcashInterfaces.APIBlockchainCreateIntegratedAddress = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIBlockchainCreateIntegratedAddress = ({} as any) as xcashInterfaces.APIBlockchainCreateIntegratedAddress;
    return result;
  }
}

export async function API_DPOPS_stats(): Promise<xcashInterfaces.APIDPOPSStats>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSStats = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSStats = ({} as any) as xcashInterfaces.APIDPOPSStats;
    return result;
  }
}

export async function API_DPOPS_registered_delegates(): Promise<xcashInterfaces.APIDPOPSDelegates>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/registered/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSDelegates = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSDelegates = ({} as any) as xcashInterfaces.APIDPOPSDelegates;
    return result;
  }
}

export async function API_DPOPS_online_delegates(): Promise<xcashInterfaces.APIDPOPSDelegates>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/online/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSDelegates = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.APIDPOPSDelegates = ({} as any) as xcashInterfaces.APIDPOPSDelegates;
    return result;
  }
}

export async function API_DPOPS_active_delegates(): Promise<xcashInterfaces.APIDPOPSDelegates>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/active/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSDelegates = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSDelegates = ({} as any) as xcashInterfaces.APIDPOPSDelegates;
    return result;
  }
}

export async function API_DPOPS_delegate(delegate:string): Promise<xcashInterfaces.APIDPOPSDelegate>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/${delegate}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSDelegate = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSDelegate = ({} as any) as xcashInterfaces.APIDPOPSDelegate;
    return result;
  }
}

export async function API_DPOPS_delegate_round_stats(delegate:string): Promise<xcashInterfaces.APIDPOPSDelegateRoundStats>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/rounds/${delegate}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSDelegateRoundStats = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSDelegateRoundStats = ({} as any) as xcashInterfaces.APIDPOPSDelegateRoundStats;
    return result;
  }
}

export async function API_DPOPS_delegates_votes(delegate:string, start:string, limit:string): Promise<xcashInterfaces.APIDPOPSDelegatesVotes>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/votes/${delegate}/${start}/${limit}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSDelegatesVotes = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSDelegatesVotes = ({} as any) as xcashInterfaces.APIDPOPSDelegatesVotes;
    return result;
  }
}

export async function API_DPOPS_vote_detail(address:string): Promise<xcashInterfaces.APIDPOPSVoteDetails>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/votes/${address}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSVoteDetails = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSVoteDetails = ({} as any) as xcashInterfaces.APIDPOPSVoteDetails;
    return result;
  }
}

export async function API_DPOPS_round_detail(height:number): Promise<xcashInterfaces.APIDPOPSRoundDetails>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/rounds/${height}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSRoundDetails = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSRoundDetails = ({} as any) as xcashInterfaces.APIDPOPSRoundDetails;
    return result;
  }
}

export async function API_DPOPS_last_block_producer(): Promise<xcashInterfaces.APIDPOPSLastBlockProducer>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/lastBlockProducer/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIDPOPSLastBlockProducer = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIDPOPSLastBlockProducer = ({} as any) as xcashInterfaces.APIDPOPSLastBlockProducer;
    return result;
  }
}

export async function API_Namespace_stats(): Promise<xcashInterfaces.APINamespaceStats>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APINamespaceStats = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APINamespaceStats = ({} as any) as xcashInterfaces.APINamespaceStats;
    return result;
  }
}

export async function API_Namespace_registered_delegates(): Promise<xcashInterfaces.APINamespaceRegisteredDelegates>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/delegates/registered/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APINamespaceRegisteredDelegates = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.APINamespaceRegisteredDelegates = ({} as any) as xcashInterfaces.APINamespaceRegisteredDelegates;
    return result;
  }
}

export async function API_Namespace_delegates(delegate:string): Promise<xcashInterfaces.APINamespaceDelegates>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/delegates/${delegate}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APINamespaceDelegates = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APINamespaceDelegates = ({} as any) as xcashInterfaces.APINamespaceDelegates;
    return result;
  }
}

export async function API_Namespace_names(name:string): Promise<xcashInterfaces.APINamespaceName>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/${name}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APINamespaceName = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APINamespaceName = ({} as any) as xcashInterfaces.APINamespaceName;
    return result;
  }
}

export async function API_Namespace_name_status(name:string): Promise<xcashInterfaces.APINamespaceNameStatus>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/status/${name}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APINamespaceNameStatus = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APINamespaceNameStatus = ({} as any) as xcashInterfaces.APINamespaceNameStatus;
    return result;
  }
}

export async function API_Namespace_address_status(address:string): Promise<xcashInterfaces.APINamespaceAddressStatus>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/addresses/status/${address}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APINamespaceAddressStatus = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.APINamespaceAddressStatus = ({} as any) as xcashInterfaces.APINamespaceAddressStatus;
    return result;
  }
}

export async function API_Namespace_name_to_address(name:string): Promise<xcashInterfaces.APINamespaceNameToAddress>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/convert/${name}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
   const result:xcashInterfaces.APINamespaceNameToAddress = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APINamespaceNameToAddress = ({} as any) as xcashInterfaces.APINamespaceNameToAddress;
    return result;
  }
}

export async function API_Namespace_address_to_name(address:string): Promise<xcashInterfaces.APINamespaceAddressToName>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/addresses/convert/${address}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
   const result:xcashInterfaces.APINamespaceAddressToName = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.APINamespaceAddressToName = ({} as any) as xcashInterfaces.APINamespaceAddressToName;
    return result;
  }
}

export async function API_Xpayment_Twitter_stats(): Promise<xcashInterfaces.APIXpaymentTwitterStats>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/stats/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIXpaymentTwitterStats = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIXpaymentTwitterStats = ({} as any) as xcashInterfaces.APIXpaymentTwitterStats;
    return result;
  }
}

export async function API_Xpayment_Twitter_stats_per_day(start:number, limit:number): Promise<xcashInterfaces.APIXpaymentTwitterStatsPerDay>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/statsPerDay/${start}/${limit}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIXpaymentTwitterStatsPerDay = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIXpaymentTwitterStatsPerDay = ({} as any) as xcashInterfaces.APIXpaymentTwitterStatsPerDay;
    return result;
  }
}

export async function API_Xpayment_Twitter_top_stats(amount:number): Promise<xcashInterfaces.APIXpaymentTwitterTopStats>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/topStats/${amount}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    const result:xcashInterfaces.APIXpaymentTwitterTopStats = await response.json();
    return result;
  }
  catch (error)
  {
    const result: xcashInterfaces.APIXpaymentTwitterTopStats = ({} as any) as xcashInterfaces.APIXpaymentTwitterTopStats;
    return result;
  }
}

export async function API_Xpayment_Twitter_recent_tips(amount:number, sort:string, sort_type:string): Promise<xcashInterfaces.APIXpaymentTwitterRecentTips>
{ 
  try
  {
    const response = await fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/recentTips/${amount}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: `{"sort":"${sort}","type":"${sort_type}"}`
    });
    const result:xcashInterfaces.APIXpaymentTwitterRecentTips = await response.json();
    return result;
  }
  catch (error)
  {
   const result: xcashInterfaces.APIXpaymentTwitterRecentTips = ({} as any) as xcashInterfaces.APIXpaymentTwitterRecentTips;
    return result;
  }
}
