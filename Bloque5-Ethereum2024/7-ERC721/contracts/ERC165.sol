// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../interfaces/IERC165.sol";

abstract contract ERC165 is IERC165 {
    // Función que verifica si el contrato soporta una interfaz específica
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        // Compara el ID de la interfaz con el ID de la interfaz ERC165
        return interfaceId == type(IERC165).interfaceId;
    }
}