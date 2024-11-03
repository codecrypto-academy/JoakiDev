// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "./interfaces/IERC20.sol";

contract ForkDaiTest is Test {
    IERC20 public dai;

    function setUp() public {
        dai = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
    }

    function testDeposit() public {
        address andrea = address(123);

        uint256 balanceInicial = dai.balanceOf(andrea);
        console.log("Balance Inicial", balanceInicial/1e18);

        uint256 totalInicial = dai.totalSupply();
        console.log("Total Inicial", totalInicial/1e18);

        deal(address(dai), andrea, 1e6 * 1e18, true);

        uint256 balanceFinal = dai.balanceOf(andrea);
        console.log("Balance Final", balanceFinal/1e18);

        uint256 totalFinal = dai.totalSupply();
        console.log("Total Final", totalFinal/1e18);
    }
}

// API_ALCHEMY = https://eth-mainnet.g.alchemy.com/v2/SbbUSo6NYu99PvKjq1a-yOYyDGcEHPRq

// forge test --fork-url [API_ALCHEMY] --match-path test/ForkDai.t.sol -vvv  