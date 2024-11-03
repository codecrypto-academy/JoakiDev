// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract Codecrypto is ERC20, ERC20Permit {
    constructor() ERC20("Codecrypto", "CCT") ERC20Permit("Codecrypto") {
        _mint(msg.sender, 100000000000 * 10 ** decimals());
    }
}