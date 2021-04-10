const ImTokenContract = artifacts.require("../contracts/ImToken.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ImTokenContract, {from: accounts[0]});
};
