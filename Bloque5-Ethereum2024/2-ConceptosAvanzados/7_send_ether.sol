// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// 3 formas de enviar ETH:

// transfer - La segunda mas recomendada. Envia 2300 gas, si la transferencia falla, toda la funcion falla
// send - La menos recomendada. Envia 2300 gas, devuelve un valor booleano que indica si la transferencia fue exitosa o no
// call - La mas recomendada. Envia todo el gas disponible, devuelve un valor booleano que indica si la llamada fue exitosa y otros datos adicionales

contract SendEther {
    constructor() payable { }

    receive() external payable { }

    function testTransfer(address payable _to) external payable {
        _to.transfer(123);
    }

    function testSend(address payable _to) external payable {
        bool send = _to.send(123);
        require(send, "Send fallido.");
    }

    function testCall(address payable _to) external payable {
        (bool success, ) = _to.call{value: 123}("");
        require(success, "Call fallida.");
    }
}

contract RecibirEther {
    event Log(uint amount, uint gas);

    receive() external payable { 
        // gasleft(): Devuelve la cantidad de gas restante disponible
        emit Log(msg.value, gasleft());
    }
}