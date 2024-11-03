// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract OptimizacionYul {

    // Consumo de gas: 949 gas
    function sum(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    // Optimizada: 748 gas
    function sumYul(uint256 a, uint256 b) public pure returns (uint256 result) {
        assembly {
            result := add(a, b)
        }
    }

    // 1 Funcion hash Solidity: 1056 gas
    function solidityHash(uint256 a, uint256 b) public pure {
        keccak256(abi.encodePacked(a, b));
    }

    // Funcion hash Yul: 638 gas
    function yulHash(uint256 a, uint256 b) public pure {
        assembly {
            // Guardar 'a' en la posición de memoria '0x00'
            mstore(0x00, a)
            mstore(0x20, b)
            let hash := keccak256(0x00, 0x40)
        }
    }

    // 2 unchecked: 2125 gas
    function uncheckedPlusPlusI() public pure {
        uint256 j = 0;
        for (uint256 i; i < 10; ) {
            j++;
            unchecked {
                ++i;
            }
        }
    }

    // Unchecked Yul: 829 gas
    function inlineAssemblyLoop() public pure {
        assembly {
            let j := 0

            for {let i := 0} lt(i, 10) {i := add(i, 0x01)} {
                j := add(j, 0x01)
            }
        }
    }

    // 3 Operaciones matematicas Solidity: 813 gas
    function subTest(uint256 a, uint256 b) public pure {
        uint256 c = a - b;
    }

    // Operaciones matematicas Yul: 675 gas
    function subAssemblyTest(uint256 a, uint256 b) public pure {
        assembly {
            let c := sub(a, b)

            // Verifica si ocurre desbordamiento negativo (underflow)
            if gt(c, a){
                mstore(0x00, "underflow")
                revert(0x00, 0x20)
            }
        }
    }

    // 4 Valores de almacenamiento Solidity: 5582 gas
    address owner = 0xabcde345983953ab32802423489343828403938;

    function updateOwner(address newOwner) public {
        owner = newOwner;
    }

    // Valores de almacenamiento Yul: 5455 gas
    address propietario = 0xabcde345983953ab32802423489343828403938;

    function assemblyUpdateOwner(address nuevoPropietario) public {
        assembly {
            sstore(propietario.slot, nuevoPropietario)
        }
    }
}