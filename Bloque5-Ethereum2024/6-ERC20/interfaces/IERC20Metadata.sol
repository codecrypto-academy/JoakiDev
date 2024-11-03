// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20Metadata {
    // FUNCIONES OPCIONALES
    // Devuelve el nombre
    function name() external view returns (string memory);

    // Devuelve el símbolo de la moneda
    function symbol() external view returns (string memory);

    // Nos permite definir la cantidad de decimales
    function decimals() external view returns (uint8);
}