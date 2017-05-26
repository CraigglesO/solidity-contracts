// const HelloWorld = artifacts.require("./HelloWorld.sol");
// const ConvertLib = artifacts.require("./ConvertLib.sol");
// const MetaCoin = artifacts.require("./MetaCoin.sol");
const Magnet = artifacts.require("./Magnet.sol");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };
module.exports = function(deployer) {
  deployer.deploy(Magnet);
};
