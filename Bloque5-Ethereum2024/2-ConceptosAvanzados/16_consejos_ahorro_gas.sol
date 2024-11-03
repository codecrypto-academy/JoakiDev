// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*
    Inicio - 50782 unidades de gas:

    - Usar calldata => 49054 gas
    - Cargar variables de estado en la memoria => 48843 gas
    - Cortocircuito => 48531 gas
    - Incrementos de bucle => 47457 gas
    - Caché de la longitud del array => 47421 gas
    - Cargar elementos del array en la memoria => 47253 gas
*/

contract GasRefactor {
    uint public total;

    // [1, 4, 7, 8, 9, 100]
    function sumar(uint[] calldata nums) external {
        uint _total = total;
        uint len = nums.length;
        for (uint i = 0; i < len; ++i) {
            uint num = nums[i];
            if(num % 2 == 0 && num < 99){
                _total += num;
            }
        }
        total = _total;
    }
}