// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Propietario {
    address public propietario;

    constructor() {
        propietario = msg.sender;
    }

    modifier soloPropietario() {
        require(msg.sender == propietario, "No eres el propietario");
        _;
    }

    modifier direccionInvalida(address _direccion) {
        require(_direccion != address(0), "Direccion invalida");
        _;
    }

    function setPropietario(address _nuevoPropietario) external soloPropietario direccionInvalida(_nuevoPropietario) {
        propietario = _nuevoPropietario;
    }

    function soloPropietarioPuedeLlamar() external view soloPropietario returns (string memory) {
        return "Funcion ejecutada por el propietario";
    }

    function cualquieraPuedeLlamar() external pure returns (string memory) {
        return "Funcion ejecutada por cualquier usuario";
    }
}