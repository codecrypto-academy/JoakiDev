// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// 3 maneras de manejar errores: require, revert, assert

// Cuando se produce un error en una transaccion, el gas sera reembolsado y cualquier variable de estado
//  que haya sido actualizada volverá a su valor original. Los errores personalizados ahorran gas.

contract ManejoErrores {
    uint public num = 123;

    function testRequire(uint _i) public pure {
        require(_i <= 10, "_i debe ser menor o igual que 10");
        // Codigo adicional
    }

    function testRevert(uint _i) public pure {
        if(_i > 1) {
            // Codigo
            if(_i > 2) {
                // Codigo
                if(_i > 10) {
                    // Se prefiere revert cuando hay "ifs" anidados
                    revert("La transaccion se revirtio porque _i debe ser menor o igual que 10");
                }
            }
        }
        // Codigo adicional
    }
    
    function testAssert() public view  {
        assert(num == 12);
        // Codigo adicional
    }

    // Error personalizado
    error MiError(address caller, uint i);

    function testErrorPersonalizado(uint _i) public view {
        if (_i > 10) {
            revert MiError(msg.sender, _i);
        }
    }
}