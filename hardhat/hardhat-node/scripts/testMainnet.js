const { ethers } = require("hardhat");

async function main() {
    const provider = ethers.provider;
    const signers = await ethers.getSigners();

    const blockNumber = await provider.getBlockNumber();
    console.log("BlockNumber: ", blockNumber);

    const balance = await provider.getBalance(signers[19].address)
    console.log("Balance: ", balance.toString());
}

main();