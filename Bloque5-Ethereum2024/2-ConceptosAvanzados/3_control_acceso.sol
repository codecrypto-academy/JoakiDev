// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract ControlAcceso {
    event AsignarRol(bytes32 indexed rol, address indexed cuenta);
    event RevocarRol(bytes32 indexed rol, address indexed cuenta);

    // Rol -> cuenta = booleano
    mapping (bytes32 => mapping (address => bool)) public roles;

    // Hash ADMIN: 0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42
    bytes32 private constant ADMIN = keccak256(abi.encodePacked("ADMIN"));
    // Hash USER: 0x2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e96
    bytes32 private constant USER = keccak256(abi.encodePacked("USER"));

    // Solo administradores
    modifier soloAdmin(bytes32 _rol){
        require(roles[_rol][msg.sender], "No autorizado.");
        _;
    }

    constructor() {
        _asignarRol(ADMIN, msg.sender);
    }

    function _asignarRol(bytes32 _rol, address _cuenta) internal {
        roles[_rol][_cuenta] = true;
        emit AsignarRol(_rol, _cuenta);
    }

    function _revocarRol(bytes32 _rol, address _cuenta) internal {
        roles[_rol][_cuenta] = false;
        emit RevocarRol(_rol, _cuenta);
    }

    function asignarRol(bytes32 _rol, address _cuenta) external soloAdmin(ADMIN) {
        _asignarRol(_rol, _cuenta);
    }

    function revocarRol(bytes32 _rol, address _cuenta) external soloAdmin(ADMIN) {
        _revocarRol(_rol, _cuenta);
    }
}