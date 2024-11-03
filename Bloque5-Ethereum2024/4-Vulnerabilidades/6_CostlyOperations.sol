// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract CostlyOperations {
    uint256 constant public MAX_ITERATIONS = 1600;

    function performCostlyOperation() pure external returns (uint256 result) {
        result = 0;

        for (uint256 i = 0; i < MAX_ITERATIONS; i++){
            result += 1;
        }
    }
}

contract CostlyOperationsOptimizado {
    uint256 constant public MAX_ITERATIONS = 1600;

    function performCostlyOperation() pure external returns (uint256 result) {
        result = sumNumbers(MAX_ITERATIONS);
    }

    function sumNumbers (uint256 n) internal pure returns (uint256) {
        return (n * (n + 1)) / 2;
    }
}