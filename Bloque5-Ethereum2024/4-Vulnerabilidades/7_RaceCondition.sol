// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract RaceCondition {
    uint256 public balance;
    mapping(address => uint256) public balances;

    function depositar() public payable {
        balances[msg.sender] += msg.value;
        balance += msg.value;
    }

    function retirar(uint256 _cantidad) public {
        require(balances[msg.sender] >= _cantidad, "Saldo insuficiente");

        uint256 saldoAnterior = balances[msg.sender];

        balances[msg.sender] -= _cantidad;

        require(payable(msg.sender).send(_cantidad), "Fallo en la transferencia");

        require(balances[msg.sender] == saldoAnterior, "Race Condition detectada");
    }
}

contract RaceConditionOptimizado {
    uint256 public balance;
    mapping(address => uint256) public balances;
    mapping(address => bool) public isTransferring;

    function depositar() public payable {
        balances[msg.sender] += msg.value;
        balance += msg.value;
    }

    function retirar(uint256 _cantidad) public {
        require(balances[msg.sender] >= _cantidad, "Saldo insuficiente");
        require(!isTransferring[msg.sender], "La transferencia ya esta en curso");
        isTransferring[msg.sender] = true;

        require(payable(msg.sender).send(_cantidad), "Fallo en la cantidad");
        balances[msg.sender] -= _cantidad;

        isTransferring[msg.sender] = false;
    }
}