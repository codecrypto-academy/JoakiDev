// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract SendEther {
    address payable public owner;

    event Deposit(address account, uint256 amount);

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable{
        emit Deposit(msg.sender, msg.value);
    }

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