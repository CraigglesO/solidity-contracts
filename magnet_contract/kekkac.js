var abi = require('ethereumjs-abi');
var BN = require('bn.js');

let hash = abi.soliditySHA3(
    ["uint"],
    [ new BN(1)]
).toString('hex');

console.log("hash", hash);
