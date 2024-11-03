// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Inmutable {
    // Con immutable GAS: 43574 - 22510
    //address public immutable owner = msg.sender;
    // Sin immutable GAS: 45706 - 24642
    address public owner;
    uint public x;

    constructor(){
        owner = msg.sender;
    }

    function foo() external {
        require(msg.sender == owner);
        x += 1;
    }
}