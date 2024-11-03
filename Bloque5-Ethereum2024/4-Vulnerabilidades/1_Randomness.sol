// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Randomness {
    uint private seed;
    uint public randomNumber;

    constructor() {
        seed = block.timestamp;
    }

    function generateRandomNumber() public {
        randomNumber = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, seed)));
    }
}

interface RandomnessOracle {
    function getRandomNumber() external returns (uint);
}

contract RandomnessOptimizado {
    uint public randomNumber;
    address private oracle;

    constructor(address _oracleAddress) {
        oracle = _oracleAddress;
    }

    function generateRandomNumber() public {
        require(oracle != address(0), "Oracle address not set");

        randomNumber = RandomnessOracle(oracle).getRandomNumber();
    }
}