// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Billetera {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable{}

    modifier soloOwner() {
        require(msg.sender == owner, "No eres el owner.");
        _;
    }

    function retirar(uint cantidad) external soloOwner {
        payable(msg.sender).transfer(cantidad);
    }

    function setOwner(address _owner) external soloOwner {
        owner = payable(_owner);
    }
}