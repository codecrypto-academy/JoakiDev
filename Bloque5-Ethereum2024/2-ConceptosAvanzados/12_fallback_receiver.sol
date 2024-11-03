// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/*
El fallback se ejecuta cuando:
- La funcion no existe
- Se envia ETH directamente

    fallback() or receive()?
                |
            Is msg.data empty?
                /    \
              Yes    No
              /       \
receive() exists?  fallback()
        /  \
      Yes  No
      /     \
receive()   fallback()
*/

contract FallbackReceive {
    fallback() external payable { }

    receive() external payable { }
}