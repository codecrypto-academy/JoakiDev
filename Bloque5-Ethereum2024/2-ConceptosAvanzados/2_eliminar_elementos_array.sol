// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract DesplazandoIzquierda {
    uint[] public array;

    function deleteArray() public {
        array = [1, 2, 3];
        delete array[1]; // [1, 0, 3]
    }

    // [1, 2, 3] -- remove(1) --> [1, 3, 3] --> [1, 3]

    modifier validarIndice(uint _index){
        require(_index < array.length, "El indice indicado esta fuera del limite.");
        _;
    }

    function remove(uint _index) public validarIndice(_index) {
        for(uint i = _index; i < array.length -1; i++){
            array[i] = array[i + 1];
        }
        array.pop();
    }

    function prueba() external {
        array = [1, 2, 3, 4, 5];
        remove(2);
        // [1, 2, 4, 5]
        // Podemos afirmar que:
        assert(array[0] == 1);
        assert(array[1] == 2);
        assert(array[2] == 4);
        assert(array[3] == 5);
        assert(array.length == 4);

        array = [1];
        remove(0);
        // []
        assert(array.length == 0);
    }
}

contract ReemplazarUltimo {
    uint[] public array;
    // [1, 2, 3, 4] -- remove(1) --> [1, 4, 3]
    // [1, 4, 3] -- remove(2) --> [1, 4]

    function remove(uint _index) public {
        array[_index] == array[array.length - 1];
        array.pop();
    }

    function prueba() external {
        array = [1, 2, 3, 4];
        remove(1);

        // [1, 4, 3]
        // Podemos afirmar que:
        assert(array.length == 3);
        assert(array[0] == 1);
        assert(array[1] == 4);
        assert(array[2] == 3);
    }
}