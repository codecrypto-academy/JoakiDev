// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// selfdestruct
// - Eliminar contrato
// - Forzar el envio de Ether a cualquier direccion

contract Borrar {
    constructor() payable {}

    function killContract() external {
        selfdestruct(payable(msg.sender));
    }

    function testContract() external pure returns (string memory) {
        return "Estoy funcionando.";
    }
}