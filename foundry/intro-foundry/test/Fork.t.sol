// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "forge-std/console.sol";

interface IWETH {
    function balanceOf(address) external view returns(uint256);
    function deposit() external payable;
}

contract ForkTest is Test {
    IWETH public weth;

    function setUp() public {
        weth = IWETH(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    }

    function testDeposit() public {
        uint256 balanceInicial = weth.balanceOf(address(this));
        console.log("Balance Inicial", balanceInicial);

        weth.deposit{value: 500}();
        
        uint256 balanceFinal = weth.balanceOf(address(this));
        console.log("Balance Final", balanceFinal);
    }
}

// API_ALCHEMY = https://eth-mainnet.g.alchemy.com/v2/SbbUSo6NYu99PvKjq1a-yOYyDGcEHPRq

// forge test --fork-url [API_ALCHEMY] --match-path test/Fork.t.sol -vvv  