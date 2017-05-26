var HelloWorld = artifacts.require("./HelloWorld.sol");
var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};
// module.exports = function(deployer) {
//   deployer.deploy(HelloWorld);
// };
