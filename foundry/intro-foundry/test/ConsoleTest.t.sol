// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";

contract ConsoleTest is Test {
    function testLog() public view {
        console.log("Log desde prueba");

        // Prueba de error
        int x = -1;

        console.logInt(x);
    }
}