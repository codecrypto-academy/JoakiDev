// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/Errores.sol";

contract ErroresTest is Test {
    Errores public errores;

    function setUp() public {
        errores = new Errores();
    }

    function testFail() public view {
        errores.throwError();
    }

    function testRevert() public {
        vm.expectRevert();
        errores.throwError();
    }

    function testRequireMessage() public {
        vm.expectRevert(bytes("No Autorizado"));
        errores.throwError();
    }

    function testCustomError() public {
        vm.expectRevert(Errores.NoAutorizado.selector);
        errores.throwCustomError();
    }

    function testErrorLabel() public pure {
        assertEq(uint256(1), uint256(1), "Test 1");
        assertEq(uint256(1), uint256(1), "Test 2");
        assertEq(uint256(3), uint256(1), "Test 3");
        assertEq(uint256(1), uint256(1), "Test 4");
        assertEq(uint256(1), uint256(1), "Test 5");
    }
}