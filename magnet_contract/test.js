var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "pBlock",
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
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "torrents",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "magnet",
        "type": "string"
      },
      {
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "name": "prevBlock",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "chairperson",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_magnet",
        "type": "string"
      }
    ],
    "name": "addTorrent",
    "outputs": [],
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
        "indexed": false,
        "name": "n",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "mag",
        "type": "string"
      },
      {
        "indexed": true,
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "PostedTorrent",
    "type": "event"
  }
];

const contract_address = '0x5bfeba238a4c58a6507377e6fa645951e2dd87bf';
const accounts = ['0x0834fbbb8d2d5cb132d290e847a95675e2fbb23d', '0xaed66222b33f1e3a4446a7094e609359d5d3e4fc'];

// const contract = web3.eth.getCode(contract_address);
const contract = web3.eth.contract(abi).at(contract_address);
console.log("contract chairperson", contract.chairperson.call());
console.log("contract pBlock", contract.pBlock.call().toNumber());
web3.eth.defaultAccount=web3.eth.accounts[0]

contract.PostedTorrent({}, {fromBlock: 5, toBlock: 5}).get((err, res) => {
  if (err)
    console.log("err", err);
  else
    console.log("res", res);
});
// console.log("c",c);

// let contractEvent = contract.PostedTorrent({}, { fromBlock: 0, toBlock: 'latest' });
// contractEvent.get((error, eventResult) => {
//   if (error)
//     console.log('Error in contract event handler: ' + error);
//   else
//     console.log('myEvent: ' + JSON.stringify(eventResult.args));
// });

// console.log("contract", contract.torrents.getData(6));
// let x = web3.eth.accounts;
// console.log("default:", x);
// web3.eth.getStorageAt("0x3589d05a1ec4Af9f65b0E5554e645707775Ee43C",1)
// contract.torrents.getData(data);
// let x = web3.eth.getStorageAt("0x0dc80d45085e251255d7d550143fad476af08fed", 1);
// let x = contract.addTorrent("name3", "magnet:?this-is-three", { gas: 200000 });
// console.log("x", x);
// console.log("torrents after", contract.torrents.getData(4));
// let x = contract.Hello.call();
// console.log("payload:", x.toNumber());

// var number = web3.eth.blockNumber;
// console.log(number); // 2744
// let x = web3.eth.getBlock(6);
// let x = web3.eth.getTransaction('0x03571a7ac8dd5e888c578d446e2583c0ab1a5c00c9d68d0a298b3ea4fd597e74');
// console.log("data", x);
