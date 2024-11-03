// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract HolaMundo {
    string private mensaje;

    constructor() {
        mensaje = "Hola Mundo desde Foundry";
    }

    function getMensaje() public view returns (string memory) {
        return mensaje;
    }

    function setMensaje(string memory nuevoMensaje) public {
        mensaje = nuevoMensaje;
    }
}
