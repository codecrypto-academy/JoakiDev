// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";
import {stdError} from "forge-std/StdError.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
    }

    function test_Increment() public {
        counter.increment();
        counter.increment();
        assertEq(counter.number(), 2);
    }

    function test_Decrement() public {
        counter.increment();
        counter.increment();
        counter.increment();
        counter.decrement();
        assertEq(counter.number(), 2);
    }

    function test_DecrementUnderFlow() public {
        vm.expectRevert(stdError.arithmeticError);
        counter.decrement();
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}
