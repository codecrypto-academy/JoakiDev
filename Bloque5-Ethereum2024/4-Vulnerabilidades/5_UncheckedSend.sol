// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract UncheckedSend {
    mapping(address => uint256) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Saldo insuficiente");

        // Vulnerabilidad
        payable(msg.sender).send(_amount);

        balances[msg.sender] -= _amount;
    }
}

contract UncheckedSendOptimizado {
    mapping(address => uint256) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external {
        require(balances[msg.sender] >= _amount, "Saldo insuficiente");

        require(payable(msg.sender).send(_amount), "Fallo en el envio");

        balances[msg.sender] -= _amount;
    }
}