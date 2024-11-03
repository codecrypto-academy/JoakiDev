// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    // FUNCIONES OBLIGATORIAS
    // Obtiene el total de tokens en circulación, el total de tokens en mi smart contract.
    function totalSupply() external view returns (uint256);

    // Devuelve el saldo del token de un propietario específico. El saldo que tiene en token.
    function balanceOf(address _owner) external view returns (uint256);

    // Transfiere un número de token desde el remitente a otra dirección
    function transfer(address _to, uint256 _value) external returns (bool);

    // Permite a un tercero transferir token desde una dirección a otra
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool);

    // Habilita a un tercero a gastar cierta cantidad de token en mi nombre
    function approve(address _spender, uint256 _value) external returns (bool);

    // Devuelve la cantidad que un tercero está autorizado a gastar en nombre de uno
    function allowance(address _owner, address _spender) external view returns (uint256);
}