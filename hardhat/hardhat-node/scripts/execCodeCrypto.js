const { ethers } = require("hardhat");
const abi = require("../artifacts/contracts/CodeCrypto.sol/Codecrypto.json").abi;

async function main() {
    const provider = ethers.provider;
    const signers = await ethers.getSigners();
    const contract = await new ethers.Contract("direccionContrato", abi);
    const balance1 = await contract.connect(signers[0]).balanceOf(signers[1].address);
    console.log("Balance before: ", balance1.toString());

    const resultado = await contract.connect(signers[0]).transfer(signers[1].address, 1000);
    const balance2 = await contract.connect(signers[1]).balanceOf(signers[1].address);
    console.log("Balance after: ", balance2.toString());
}

main();