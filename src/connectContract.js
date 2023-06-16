import { ethers } from "ethers";
let contract;
const connectContract = async () => {
     const Address = "0xD021dD9e0D90870CF3bF4e74b2Fc8EA09514E32A";
     const Abi =[
          {
               "inputs": [],
               "stateMutability": "nonpayable",
               "type": "constructor"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "owner",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "spender",
                         "type": "address"
                    },
                    {
                         "indexed": false,
                         "internalType": "uint256",
                         "name": "value",
                         "type": "uint256"
                    }
               ],
               "name": "Approval",
               "type": "event"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "spender",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "amount",
                         "type": "uint256"
                    }
               ],
               "name": "approve",
               "outputs": [
                    {
                         "internalType": "bool",
                         "name": "",
                         "type": "bool"
                    }
               ],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "amount",
                         "type": "uint256"
                    }
               ],
               "name": "burn",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "account",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "amount",
                         "type": "uint256"
                    }
               ],
               "name": "burnFrom",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "spender",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "subtractedValue",
                         "type": "uint256"
                    }
               ],
               "name": "decreaseAllowance",
               "outputs": [
                    {
                         "internalType": "bool",
                         "name": "",
                         "type": "bool"
                    }
               ],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "spender",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "addedValue",
                         "type": "uint256"
                    }
               ],
               "name": "increaseAllowance",
               "outputs": [
                    {
                         "internalType": "bool",
                         "name": "",
                         "type": "bool"
                    }
               ],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "swap",
               "outputs": [],
               "stateMutability": "payable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "_index",
                         "type": "uint256"
                    }
               ],
               "name": "swapBack",
               "outputs": [],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "sender",
                         "type": "address"
                    },
                    {
                         "indexed": false,
                         "internalType": "uint256",
                         "name": "ethAmount",
                         "type": "uint256"
                    },
                    {
                         "indexed": false,
                         "internalType": "uint256",
                         "name": "tokensReceived",
                         "type": "uint256"
                    }
               ],
               "name": "TokensSwapped",
               "type": "event"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "recipient",
                         "type": "address"
                    },
                    {
                         "indexed": false,
                         "internalType": "uint256",
                         "name": "ethAmount",
                         "type": "uint256"
                    }
               ],
               "name": "TokensSwappedBack",
               "type": "event"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "amount",
                         "type": "uint256"
                    }
               ],
               "name": "transfer",
               "outputs": [
                    {
                         "internalType": "bool",
                         "name": "",
                         "type": "bool"
                    }
               ],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "anonymous": false,
               "inputs": [
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "from",
                         "type": "address"
                    },
                    {
                         "indexed": true,
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "indexed": false,
                         "internalType": "uint256",
                         "name": "value",
                         "type": "uint256"
                    }
               ],
               "name": "Transfer",
               "type": "event"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "from",
                         "type": "address"
                    },
                    {
                         "internalType": "address",
                         "name": "to",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "amount",
                         "type": "uint256"
                    }
               ],
               "name": "transferFrom",
               "outputs": [
                    {
                         "internalType": "bool",
                         "name": "",
                         "type": "bool"
                    }
               ],
               "stateMutability": "nonpayable",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "owner",
                         "type": "address"
                    },
                    {
                         "internalType": "address",
                         "name": "spender",
                         "type": "address"
                    }
               ],
               "name": "allowance",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "account",
                         "type": "address"
                    }
               ],
               "name": "balanceOf",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "decimals",
               "outputs": [
                    {
                         "internalType": "uint8",
                         "name": "",
                         "type": "uint8"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "_totalETH",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_ethSend",
                         "type": "uint256"
                    }
               ],
               "name": "get3Value",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "_pre",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_main",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_post",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "pure",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "_n",
                         "type": "uint256"
                    }
               ],
               "name": "getSwappingRate",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "InitialSwapingRate",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "lockingPeriod",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "name",
               "outputs": [
                    {
                         "internalType": "string",
                         "name": "",
                         "type": "string"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "owner",
               "outputs": [
                    {
                         "internalType": "address",
                         "name": "",
                         "type": "address"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "_user",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_index",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_totalETH",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_TOTAL_SUPPLY",
                         "type": "uint256"
                    }
               ],
               "name": "swapBackConvert",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "uint256",
                         "name": "_totalETH",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "_eth",
                         "type": "uint256"
                    }
               ],
               "name": "swapConvert",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "symbol",
               "outputs": [
                    {
                         "internalType": "string",
                         "name": "",
                         "type": "string"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "TOTAL_SUPPLY",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "totalETH",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [],
               "name": "totalSupply",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "",
                         "type": "address"
                    }
               ],
               "name": "txCount",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          },
          {
               "inputs": [
                    {
                         "internalType": "address",
                         "name": "",
                         "type": "address"
                    },
                    {
                         "internalType": "uint256",
                         "name": "",
                         "type": "uint256"
                    }
               ],
               "name": "userData",
               "outputs": [
                    {
                         "internalType": "uint256",
                         "name": "token",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "eth",
                         "type": "uint256"
                    },
                    {
                         "internalType": "uint256",
                         "name": "time",
                         "type": "uint256"
                    },
                    {
                         "internalType": "bool",
                         "name": "swapBack",
                         "type": "bool"
                    }
               ],
               "stateMutability": "view",
               "type": "function"
          }
     ];
     const provider = new ethers.providers.Web3Provider(window.ethereum);
     const signer = provider.getSigner();
     contract = new ethers.Contract(Address, Abi, signer);
     
};
export default connectContract;
export { contract };
