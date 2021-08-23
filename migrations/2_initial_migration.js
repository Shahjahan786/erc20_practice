
const Assignment3A = artifacts.require("Assignment3A");
const Assignment3B = artifacts.require("Assignment3B");
module.exports = async function (deployer, network, accounts) {
  deployer.deploy(Assignment3A);
  deployer.deploy(Assignment3B);

};
