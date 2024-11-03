// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract IterableMapping {
    mapping (address => uint) public balances;
    mapping (address => bool) public insertado;
    address[] public keys;

    function set(address _key, uint _valor) external {
        balances[_key] = _valor;

        if (!insertado[_key]) {
            insertado[_key] = true;
            keys.push(_key);
        }
    }

    function getTamanyo() external view returns (uint) {
        return keys.length;
    }

    function primero() external view returns (uint) {
        return balances[keys[0]];
    }

    function ultimo() external view returns (uint) {
        return balances[keys[keys.length - 1]];
    }

    function get(uint _i) external view returns (uint) {
        return balances[keys[_i]];
    }
}