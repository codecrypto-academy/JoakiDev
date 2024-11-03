// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/SendEther.sol";

contract SendEtherTest is Test {
    SendEther public sendEther;

    function setUp() public {
        sendEther = new SendEther();
    }

    function _send(uint256 amount) private {
        (bool ok, ) = address(sendEther).call{value: amount}("");
        require(ok, "send eth failed");
    }

    function testEthBalance() public{
        console.log("ETH Balance", address(this).balance/1e18);
    }

    function testSendEther() public {
        uint bal = address(sendEther).balance;

        // Establece que la cuenta 1 tiene 100 ETH
        deal(address(1), 100);
        assertEq(address(1).balance, 100);
        
        deal(address(1), 10);
        assertEq(address(1).balance, 10);

        // Hoax
        deal(address(1), 145);
        vm.prank(address(1));
        _send(145);

        hoax(address(1), 567);
        _send(567);

        assertEq(address(sendEther).balance, bal + 145 + 567);
    }
}