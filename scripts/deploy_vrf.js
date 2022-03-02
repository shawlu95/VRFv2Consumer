const { ethers } = require('hardhat');
const hre = require('hardhat');

async function main() {
  await hre.run('compile');
  const chainId = hre.network.config.chainId;

  const config = require('./config.json').chainId[chainId.toString()];
  const { subscriptionId, vrfCoordinator, link, keyHash } = config;
  const VRFv2Consumer = await ethers.getContractFactory('VRFv2Consumer');
  const consumer = await VRFv2Consumer.deploy(subscriptionId, vrfCoordinator, link, keyHash);
  await consumer.deployed();
  console.log('VRFv2Consumer deployed:', consumer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
