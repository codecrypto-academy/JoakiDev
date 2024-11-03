// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract AccessControl {
    uint private secretNumber;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function setSecretNumber(uint _secretNumber) public {
        secretNumber = _secretNumber;
    }

    function getSecretNumber() public view returns (uint) {
        return secretNumber;
    }
}

contract AccessControlOptimizado {
    uint private secretNumber;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Solo el propietario puede llamar a esta funcion");
        _;
    }

    function setSecretNumber(uint _secretNumber) public onlyOwner {
        secretNumber = _secretNumber;
    }

    function getSecretNumber() public view returns (uint) {
        return secretNumber;
    }
}