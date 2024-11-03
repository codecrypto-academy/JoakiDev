// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

library Math {
    function max(uint x, uint y) internal pure returns (uint) {
        return x >= y ? x : y;
    }
}

contract Test {
    function testMax(uint x, uint y) external pure returns (uint) {
        return Math.max(x,y);
    }
}

// Funcion que permita buscar la posicion de un numero que le pasemos
library Array {
    function find(uint[] storage arr, uint x) internal view returns (uint) {
        for (uint i = 0; i < arr.length; i++) {
            if(arr[i] == x){
                return i;
            }
        }
        revert("Not found");
    }
}

contract TestArray {
    uint[] public arr = [3, 2, 1];

    function testFind() external view returns (uint i) {
        return Array.find(arr, 3);
    }
}