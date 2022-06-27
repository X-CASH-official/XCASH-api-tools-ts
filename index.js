"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace_remote_data_save_name = exports.Namespace_update_remote_data = exports.Blockchain_change_wallet_password = exports.Blockchain_close_wallet = exports.Blockchain_open_wallet = exports.Blockchain_create_wallet = exports.Blockchain_validate_address = exports.Blockchain_rescan_spent = exports.Blockchain_verify = exports.Blockchain_sign = exports.Blockchain_check_reserve_proof = exports.Blockchain_get_reserve_proof = exports.Blockchain_check_spend_proof = exports.Blockchain_get_spend_proof = exports.Blockchain_check_tx_proof = exports.Blockchain_get_tx_proof = exports.Blockchain_check_tx_key = exports.Blockchain_get_tx_key = exports.Blockchain_rescan_blockchain = exports.Blockchain_split_integrated_address = exports.Blockchain_make_integrated_address = exports.Blockchain_query_key = exports.Blockchain_incoming_transfers = exports.Blockchain_get_payments = exports.Blockchain_sweep_all = exports.Blockchain_transfer_split = exports.Blockchain_get_height = exports.Blockchain_create_address = exports.Blockchain_get_address_index = exports.Blockchain_get_address = exports.Blockchain_get_balance = exports.DPOPS_delegate_update = exports.DPOPS_delegate_register = exports.DPOPS_vote_status = exports.DPOPS_revote = exports.DPOPS_vote = exports.Blockchain_get_tx = exports.Blockchain_version = exports.Blockchain_hard_fork_info = exports.Blockchain_get_info = exports.Blockchain_get_block = exports.Blockchain_get_block_headers_range = exports.Blockchain_get_block_header_by_height = exports.Blockchain_get_block_header_by_hash = exports.Blockchain_get_last_block_header = exports.Blockchain_get_block_template = exports.Blockchain_get_block_hash = exports.Blockchain_get_block_count = exports.Initialize = exports.xcashInterfaces = void 0;
exports.API_Xpayment_Twitter_recent_tips = exports.API_Xpayment_Twitter_top_stats = exports.API_Xpayment_Twitter_stats_per_day = exports.API_Xpayment_Twitter_stats = exports.API_Namespace_address_to_name = exports.API_Namespace_name_to_address = exports.API_Namespace_address_status = exports.API_Namespace_name_status = exports.API_Namespace_names = exports.API_Namespace_delegates = exports.API_Namespace_registered_delegates = exports.API_Namespace_stats = exports.API_DPOPS_last_block_producer = exports.API_DPOPS_round_detail = exports.API_DPOPS_vote_detail = exports.API_DPOPS_delegates_votes = exports.API_DPOPS_delegate_round_stats = exports.API_DPOPS_delegate = exports.API_DPOPS_active_delegates = exports.API_DPOPS_online_delegates = exports.API_DPOPS_registered_delegates = exports.API_DPOPS_stats = exports.API_Blockchain_create_integrated_address = exports.API_Blockchain_validate_address = exports.API_Blockchain_tx_history = exports.API_Blockchain_prove_balance = exports.API_Blockchain_prove_tx = exports.API_Blockchain_tx_data = exports.API_Blockchain_block_data = exports.API_Blockchain_stats = exports.Namespace_remote_data_renewal_end = exports.Namespace_remote_data_renewal_start = exports.Namespace_remote_data_delegate_set_amount = exports.Namespace_remote_data_purchase_name = void 0;
exports.xcashInterfaces = __importStar(require("./interfaces"));
var XCASH_DAEMON_ADDRESS = "us1.xcash.foundation:18281";
var XCASH_WALLET_ADDRESS = "us1.xcash.foundation:18289";
const XCASH_GLOBAL_API_ADDRESS = "https://api.xcash.foundation";
function Initialize(data1, data2) {
    XCASH_DAEMON_ADDRESS = data1 == "" ? XCASH_DAEMON_ADDRESS : data1;
    XCASH_WALLET_ADDRESS = data2 == "" ? XCASH_WALLET_ADDRESS : data2;
}
exports.Initialize = Initialize;
function Blockchain_get_block_count() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_block_count"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_block_count = Blockchain_get_block_count;
function Blockchain_get_block_hash() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_block_count"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_block_hash = Blockchain_get_block_hash;
function Blockchain_get_block_template(height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"on_get_block_hash","params":[${height}]}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_block_template = Blockchain_get_block_template;
function Blockchain_get_last_block_header() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_last_block_header"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_last_block_header = Blockchain_get_last_block_header;
function Blockchain_get_block_header_by_hash(height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_hash","params":{"hash":"${height}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_block_header_by_hash = Blockchain_get_block_header_by_hash;
function Blockchain_get_block_header_by_height(height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_block_header_by_height","params":{"height":${height}}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_block_header_by_height = Blockchain_get_block_header_by_height;
function Blockchain_get_block_headers_range(startHeight, endHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_block_headers_range","params":{"start_height":${startHeight},"end_height":${endHeight}}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_block_headers_range = Blockchain_get_block_headers_range;
function Blockchain_get_block(height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_block","params":{"height":${height}}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_block = Blockchain_get_block;
function Blockchain_get_info() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_info"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_info = Blockchain_get_info;
function Blockchain_hard_fork_info() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"hard_fork_info"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_hard_fork_info = Blockchain_hard_fork_info;
function Blockchain_version() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_version"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_version = Blockchain_version;
function Blockchain_get_tx(tx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_DAEMON_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"txs_hashes":["${tx}"],"decode_as_json":true}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_tx = Blockchain_get_tx;
function DPOPS_vote(delegate, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"vote","params":{"delegate_data":"${delegate}","amount":"${amount}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.DPOPS_vote = DPOPS_vote;
function DPOPS_revote(amount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"vote","params":{"amount":"${amount}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.DPOPS_revote = DPOPS_revote;
function DPOPS_vote_status() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"vote_status"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.DPOPS_vote_status = DPOPS_vote_status;
function DPOPS_delegate_register(delegate, IP, key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"delegate_register","params":{"delegate_name":"${delegate}","delegate_IP_address":"${IP}","delegates_public_key":"${key}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.DPOPS_delegate_register = DPOPS_delegate_register;
function DPOPS_delegate_update(item, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"delegate_update","params":{"item":"${item}","value":"${value}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.DPOPS_delegate_update = DPOPS_delegate_update;
function Blockchain_get_balance() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_balance"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_balance = Blockchain_get_balance;
function Blockchain_get_address() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_address"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_address = Blockchain_get_address;
function Blockchain_get_address_index(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_address_index","params":{"address":"${address}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_address_index = Blockchain_get_address_index;
function Blockchain_create_address(index) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"create_address","params":{"account_index":${index}}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_create_address = Blockchain_create_address;
function Blockchain_get_height() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_height"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_height = Blockchain_get_height;
function Blockchain_transfer_split(address, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[`;
            for (let count = 0; count < address.length; count++) {
                data += `{"amount":${amount[count]},"address":"${address[count]}"},`;
            }
            data = data.slice(0, -1);
            data += `],"ring_size":21,"get_tx_keys": true}}`;
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: data
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_transfer_split = Blockchain_transfer_split;
function Blockchain_sweep_all(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"address":"${address}","ring_size":21}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_sweep_all = Blockchain_sweep_all;
function Blockchain_get_payments(payment_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_payments","params":{"payment_id":"${payment_id}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_payments = Blockchain_get_payments;
function Blockchain_incoming_transfers(transfer_type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"incoming_transfers","params":{"transfer_type":"${transfer_type}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_incoming_transfers = Blockchain_incoming_transfers;
function Blockchain_query_key(key_type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"${key_type}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_query_key = Blockchain_query_key;
function Blockchain_make_integrated_address(address, payment_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"standard_address":"${address}","payment_id":"${payment_id}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_make_integrated_address = Blockchain_make_integrated_address;
function Blockchain_split_integrated_address(integrated_address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"split_integrated_address","params":{"integrated_address":"${integrated_address}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_split_integrated_address = Blockchain_split_integrated_address;
function Blockchain_rescan_blockchain() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_rescan_blockchain = Blockchain_rescan_blockchain;
function Blockchain_get_tx_key(tx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_tx_key","params":{"txid":"${tx}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_tx_key = Blockchain_get_tx_key;
function Blockchain_check_tx_key(tx, key, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"check_tx_key","params":{"txid":"${tx}","tx_key":"${key}","address":"${address}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_check_tx_key = Blockchain_check_tx_key;
function Blockchain_get_tx_proof(tx, address, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_tx_proof","params":{"txid":"${tx}","address":"${address}","message":"${message}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_tx_proof = Blockchain_get_tx_proof;
function Blockchain_check_tx_proof(tx, address, message, signature) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"check_tx_proof","params":{"txid":"${tx}","address":"${address}","message":"${message}","signature":"${signature}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_check_tx_proof = Blockchain_check_tx_proof;
function Blockchain_get_spend_proof(tx, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_spend_proof","params":{"txid":"${tx}","message":"${message}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_spend_proof = Blockchain_get_spend_proof;
function Blockchain_check_spend_proof(tx, message, signature) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"check_spend_proof","params":{"txid":"${tx}","message":"${message}","signature":"${signature}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_check_spend_proof = Blockchain_check_spend_proof;
function Blockchain_get_reserve_proof(all, amount, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":${all},"amount":${amount},"message":"${message}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_get_reserve_proof = Blockchain_get_reserve_proof;
function Blockchain_check_reserve_proof(address, signature, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"${address}","signature":"${signature}","message":"${message}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_check_reserve_proof = Blockchain_check_reserve_proof;
function Blockchain_sign(message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"${message}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_sign = Blockchain_sign;
function Blockchain_verify(message, address, signature) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"verify","params":{"data":"${message}","address":"${address}","signature":"${signature}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_verify = Blockchain_verify;
function Blockchain_rescan_spent() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"rescan_spent"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_rescan_spent = Blockchain_rescan_spent;
function Blockchain_validate_address(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"validate_address","params":{"address":"${address}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_validate_address = Blockchain_validate_address;
function Blockchain_create_wallet(filename, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"create_wallet","params":{"filename":"${filename}","password":"${password}","language":"English"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_create_wallet = Blockchain_create_wallet;
function Blockchain_open_wallet(filename, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"open_wallet","params":{"filename":"` + filename + `","password":"` + password + `"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_open_wallet = Blockchain_open_wallet;
function Blockchain_close_wallet() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"close_wallet"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_close_wallet = Blockchain_close_wallet;
function Blockchain_change_wallet_password(old_password, new_password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"${old_password}","new_password":"${new_password}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Blockchain_change_wallet_password = Blockchain_change_wallet_password;
function Namespace_update_remote_data(item, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"update_remote_data","params":{"item":"${item}","value":"${value}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Namespace_update_remote_data = Namespace_update_remote_data;
function Namespace_remote_data_save_name(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_save_name","params":{"name":"${name}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Namespace_remote_data_save_name = Namespace_remote_data_save_name;
function Namespace_remote_data_purchase_name(saddress, saddress_signature, paddress, paddress_signature, tx_hash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_purchase_name","params":{"saddress":"${saddress}","saddress_signature":"${saddress_signature}","paddress":"${paddress}","paddress_signature":"${paddress_signature}","tx_hash":"${tx_hash}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Namespace_remote_data_purchase_name = Namespace_remote_data_purchase_name;
function Namespace_remote_data_delegate_set_amount(amount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_delegate_set_amount","params":{"amount":"${amount}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Namespace_remote_data_delegate_set_amount = Namespace_remote_data_delegate_set_amount;
function Namespace_remote_data_renewal_start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_renewal_start"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Namespace_remote_data_renewal_start = Namespace_remote_data_renewal_start;
function Namespace_remote_data_renewal_end(tx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://${XCASH_WALLET_ADDRESS}/json_rpc`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"jsonrpc":"2.0","id":"0","method":"remote_data_renewal_end","params":{"tx_hash":"${tx}"}}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.Namespace_remote_data_renewal_end = Namespace_remote_data_renewal_end;
function API_Blockchain_stats() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/stats/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_stats = API_Blockchain_stats;
function API_Blockchain_block_data(height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/blocks/${height}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_block_data = API_Blockchain_block_data;
function API_Blockchain_tx_data(tx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/tx/${tx}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_tx_data = API_Blockchain_tx_data;
function API_Blockchain_prove_tx(tx, address, key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/tx/prove/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"tx":"${tx}","address":"${address}","key": "${key}"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_prove_tx = API_Blockchain_prove_tx;
function API_Blockchain_prove_balance(address, signature) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/prove/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"address":"${address}","signature": "${signature}"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_prove_balance = API_Blockchain_prove_balance;
function API_Blockchain_tx_history(tx_type, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/history/${tx_type}/${address}/"`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_tx_history = API_Blockchain_tx_history;
function API_Blockchain_validate_address(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/validate/${address}/"`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_validate_address = API_Blockchain_validate_address;
function API_Blockchain_create_integrated_address(address, payment_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/blockchain/unauthorized/address/createIntegrated/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"address":"${address}","paymentId": "${payment_id}"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Blockchain_create_integrated_address = API_Blockchain_create_integrated_address;
function API_DPOPS_stats() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/stats/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_stats = API_DPOPS_stats;
function API_DPOPS_registered_delegates() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/registered/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_registered_delegates = API_DPOPS_registered_delegates;
function API_DPOPS_online_delegates() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/online/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_online_delegates = API_DPOPS_online_delegates;
function API_DPOPS_active_delegates() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/active/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_active_delegates = API_DPOPS_active_delegates;
function API_DPOPS_delegate(delegate) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/${delegate}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_delegate = API_DPOPS_delegate;
function API_DPOPS_delegate_round_stats(delegate) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/rounds/${delegate}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_delegate_round_stats = API_DPOPS_delegate_round_stats;
function API_DPOPS_delegates_votes(delegate, start, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/delegates/votes/${delegate}/${start}/${limit}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_delegates_votes = API_DPOPS_delegates_votes;
function API_DPOPS_vote_detail(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/votes/${address}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_vote_detail = API_DPOPS_vote_detail;
function API_DPOPS_round_detail(height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/rounds/${height}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_round_detail = API_DPOPS_round_detail;
function API_DPOPS_last_block_producer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/dpops/unauthorized/lastBlockProducer/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_DPOPS_last_block_producer = API_DPOPS_last_block_producer;
function API_Namespace_stats() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/stats/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_stats = API_Namespace_stats;
function API_Namespace_registered_delegates() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/delegates/registered/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_registered_delegates = API_Namespace_registered_delegates;
function API_Namespace_delegates(delegate) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/delegates/${delegate}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_delegates = API_Namespace_delegates;
function API_Namespace_names(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/${name}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_names = API_Namespace_names;
function API_Namespace_name_status(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/status/${name}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_name_status = API_Namespace_name_status;
function API_Namespace_address_status(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/addresses/status/${address}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_address_status = API_Namespace_address_status;
function API_Namespace_name_to_address(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/names/convert/${name}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_name_to_address = API_Namespace_name_to_address;
function API_Namespace_address_to_name(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xcash/namespace/unauthorized/addresses/convert/${address}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Namespace_address_to_name = API_Namespace_address_to_name;
function API_Xpayment_Twitter_stats() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/stats/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Xpayment_Twitter_stats = API_Xpayment_Twitter_stats;
function API_Xpayment_Twitter_stats_per_day(start, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/statsPerDay/${start}/${limit}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Xpayment_Twitter_stats_per_day = API_Xpayment_Twitter_stats_per_day;
function API_Xpayment_Twitter_top_stats(amount) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/topStats/${amount}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Xpayment_Twitter_top_stats = API_Xpayment_Twitter_top_stats;
function API_Xpayment_Twitter_recent_tips(amount, sort, sort_type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${XCASH_GLOBAL_API_ADDRESS}/v1/xpayment-twitter/twitter/unauthorized/recentTips/${amount}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: `{"sort":"${sort}","type":"${sort_type}"}`
            });
            const result = yield response.json();
            return result;
        }
        catch (error) {
            const result = {};
            return result;
        }
    });
}
exports.API_Xpayment_Twitter_recent_tips = API_Xpayment_Twitter_recent_tips;
