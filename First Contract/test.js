var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getBalanceInEth",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "receiver",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "sendCoin",
    "outputs": [
      {
        "name": "sufficient",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
];

const contract_address = '0x97e6f0ef7396d33e6f18af712847bdb2c4ffc6cc';
const accounts = ['0x2ba962ef325bc168d4af5398130403b40400b9e0', '0x2894dbcbea08ff9f464fa10c929c885076e88486'];

// const contract = web3.eth.getCode(contract_address);
const contract = web3.eth.contract(abi).at(contract_address);
web3.eth.defaultAccount=web3.eth.accounts[0]
// const address = web3.eth.defaultAccount;
// console.log("a:", address);
// console.log("contract", contract);
// let x = web3.eth.accounts;
// console.log("default:", x);

let x = contract.getBalance.call(accounts[0]);
// let x = contract.Hello.call();
console.log("payload:", x.toNumber());
