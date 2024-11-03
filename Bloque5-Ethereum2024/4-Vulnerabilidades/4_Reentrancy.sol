// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Reentrancy {
    mapping(address => uint256) private balances;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external {
        require(_amount <= balances[msg.sender], "Saldo insuficiente");

        // Vulnerabilidad
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "Transferencia fallida");

        balances[msg.sender] -= _amount;
    }
}

contract ReentrancyOptimizado {
    mapping(address => uint256) public balances;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Saldo insuficiente");

        require(payable(msg.sender).send(_amount), "Fallo en el envio");

        balances[msg.sender] -= _amount;
    }
}