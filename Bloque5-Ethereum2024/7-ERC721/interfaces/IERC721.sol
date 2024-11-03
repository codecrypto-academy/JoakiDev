// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./IERC165.sol";

interface IERC721 is IERC165 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    // Devuelve el balance en token que posee una dirección
    function balanceOf(address owner) external view returns (uint256 balance);

    // Devuelve la dirección del propietario de un token
    function ownerOf(uint256 tokenId) external view returns (address owner);

    // Transfiere de manera segura un token de una dirección a otra
    function safeTransferFrom(address from, address to, uint256 tokenId) external;

    // Transfiere de manera segura un token de una dirección a otra con datos adicionales
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

    // Transfiere un token de una dirección a otra sin seguridad adicional
    function transferFrom(address from, address to, uint256 tokenId) external;

    // Autoriza a una dirección para transferir un token específico
    function approve(address to, uint256 tokenId) external;

    // Devuelve una dirección autorizada para transferir un token específico
    function getApprove(uint256 tokenId) external view returns (address operator);

    // Concede o revoca permiso para gestionar todos los token del propietario
    function setApprovalForAll(address operator, bool approved) external;

    // Verifica si una dirección está autorizada o no para gestionar todos los token de un propietario
    function isApprovedForAll(address owner, address operator) external view returns (bool);
}