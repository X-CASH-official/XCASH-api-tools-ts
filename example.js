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
const xcash = __importStar(require("xcash"));
const XCASH_DAEMON_ADDRESS = "127.0.0.1:18281";
const XCASH_WALLET_ADDRESS = "127.0.0.1:18285";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield xcash.Initialize(XCASH_DAEMON_ADDRESS, XCASH_WALLET_ADDRESS);
            const data = yield xcash.Blockchain_get_block_count();
            console.log(data.result.count); // prints 993163
            console.log(JSON.stringify(data));
            /* Prints out the following:
            {
              "id": "0",
              "jsonrpc": "2.0",
              "result": {
                "count": 993163,
                "status": "OK",
                "untrusted": "false"
              }
            }
            */
            const dataAPI = yield xcash.API_Blockchain_stats();
            console.log(dataAPI.height); // prints 810000
            console.log(JSON.stringify(dataAPI));
            /* Prints out the following:
        {
          "height": 810000,
          "hash":"c7aa6eb38c47e7f013a5f8042477d1734ff9808fdc8608fb088085d624d2d509",
          "reward": 20000000,
          "size": 20000,
          "version": 13,
          "versionBlockHeight": 1000000,
          "nextVersionBlockHeight": 0,
          "totalPublicTx": 100000,
          "totalPrivateTx": 100000,
          "circulatingSupply": 10000000,
          "generatedSupply": 100000000,
          "totalSupply": 100000000,
          "emissionReward": 1000000000,
          "emissionHeight": 1000000000,
          "emissionTime": 1000000000,
          "inflationHeight": 1000000000,
          "inflationTime": 1000000000
        }
            */
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
