pragma solidity ^0.4.4;

contract HelloWorld {
	mapping (address => uint) balances;

  function HelloWorld() {
    balances[tx.origin] = 10;
  }

  function Hello() returns(string) {
    return "HELLO WORLD!";
  }
}
