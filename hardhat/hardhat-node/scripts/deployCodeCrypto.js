const hre = require("hardhat");

async function main() {
    const token = await hre.ethers.deployContract("CodeCrypto")

    await token.waitForDeployment();

    console.log(`${token.target}`);
}