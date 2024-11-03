// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/HolaMundo.sol";

contract HolaMundoTest is Test {
    HolaMundo public holaMundo;

    function setUp() public {
        holaMundo = new HolaMundo();
    }

    function testGetMensaje() public view {
        string memory mensaje = holaMundo.getMensaje();
        assertEq(mensaje, "Hola Mundo desde Foundry");
    }

    function testSetMensaje() public {
        string memory nuevoMensaje = "Prueba setMensaje";
        holaMundo.setMensaje(nuevoMensaje);
        assertEq(holaMundo.getMensaje(), nuevoMensaje);
    }
}
