pragma solidity ^0.4.11;

contract Magnet {

  event EventTrigger(string n, uint prev);

  uint public lastBlock;

  /// Instantiate the contract
  function Magnet() {

  }

  struct Struct {
    uint last;
  }

  Struct[] public x;

  /// Add
  function add(string _name) {
    // DO STUFF HERE
    // ...
    x.push(Struct({
      last: lastBlock,
    }));

    lastBlock = block.number;
    // Fire a new Event
    EventTrigger(_name, block.number);
  }
}


/*pragma solidity ^0.4.11;

contract Magnet {

  event EventTrigger(string n, uint prev);

  uint public lastBlock;

  /// Instantiate the contract
  function Magnet() {

  }

  /// Add
  function add(string _name) {

    lastBlock = block.number;
    // Fire a new Event
    EventTrigger(_name, block.number);
  }
}*/

/** JS **/
/*let store = [];
const contract = web3.eth.contract(contract_abi).at(contract_address);
let prev = contract.pBlock.call().toNumber();
web3.eth.defaultAccount=web3.eth.accounts[0]

while (prev !== 0) {
  contract.PostedTorrent({}, {fromBlock: prev, toBlock: prev}).get((err, res) => {
    if (!err) {
      store.push(res);
      prev = res.args.prev;
    } else {
      break;
    }
  });
}*/
