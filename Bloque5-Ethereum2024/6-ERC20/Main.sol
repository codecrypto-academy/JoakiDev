// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../contracts/ERC20.sol";

contract Main {
    ERC20 private _token;
    address private owner;
    address private contractAddress;

    constructor(){
        _token = new ERC20("TEST Coin", "TCI");
        owner = msg.sender;
        contractAddress = address(this);
    }

    // Función para obtener el precio del token
    function priceTokens(uint256 _numTokens) public pure returns(uint256) {
        return _numTokens * 1 ether;
    }

    // Función para hacer la venta de un token
    function buyTokens(address _client, uint256 _amount) public payable {
        uint256 price = priceTokens(_amount);
        require(msg.value >= price, "Buy more tokens");
        uint256 returnValue = msg.value - price;
        payable(msg.sender).transfer(returnValue);

        _token.transfer(_client, _amount);
    }

    // Función para generar nuevos tokens
    function generateTokens(uint256 _amount) public {
        _token.increaseTotalSupply(contractAddress, _amount);
    }

    // Función para obtener la dirección del smartcontract
    function getContractAddress() public view returns(address){
        return contractAddress;
    }

    // Función para obtener el balance de una cuenta
    function balanceAccount(address _account) public view returns(uint256){
        return _token.balanceOf(_account);
    }

    // Devuelve el total de token totales en el contrato
    function getTotalSupply() public view returns(uint256){
        return _token.totalSupply();
    }
}