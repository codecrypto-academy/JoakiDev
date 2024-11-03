// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/Billetera.sol";

contract BilleteraTest is Test {
    Billetera public billetera;

    function setUp() public {
        billetera = new Billetera();
    }

    function testSetOwner() public {
        billetera.setOwner(address(1));
        assertEq(billetera.owner(), address(1));
    }

    function testFailNotOwner() public {
        vm.prank(address(1));
        billetera.setOwner(address(1));
    }

    function testFailSetOwnerAgain() public {
        // msg.sender == address(this);
        billetera.setOwner(address(1));

        // Version 1
        vm.prank(address(1));
        billetera.setOwner(address(1));
        
        vm.prank(address(1));
        billetera.setOwner(address(1));
        
        vm.prank(address(1));
        billetera.setOwner(address(1));

        vm.startPrank(address(1));
        billetera.setOwner(address(1));
        vm.stopPrank();
    }
}