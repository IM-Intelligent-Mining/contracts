const RanStakeContract = artifacts.require("../contracts/ImStaking.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(RanStakeContract, '0x4f071EcB549ADad0c518f24f115012649Aca6309', '0xce12c5903737547aCd08aE93051B5cBf8BB1Da29',{from: accounts[0]});
};
