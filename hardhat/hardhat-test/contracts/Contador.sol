// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.9;

contract Contador {
    uint public count = 0;
    constructor(uint inicio) payable {
        count = inicio;
    }

    function increment() public {
        count++;
    }

    function decrement() public {
        count--;
    }

    function reset() public {
        count = 0;
    }

    function get() public view returns (uint) {
        return count;
    }
}