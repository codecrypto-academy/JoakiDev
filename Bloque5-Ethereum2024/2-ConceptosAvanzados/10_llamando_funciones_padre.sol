// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Hay dos formas de llamar a las funciones del contrato padre: direct y super
// La invocacion direct no considera si la funcion ha sido sobreescrita en los contratos hijos.
// Si sera considerada si usamos super.

contract E {
    event Log(string message);

    function foo() virtual public {
        emit Log("E.foo Original");
    }

    function bar() virtual public {
        emit Log("E.bar Original");
    }
}

contract F is E {
    function foo() virtual override public {
        emit Log("F.foo Sobreescrita");
        E.foo(); // direct
    }

    function bar() virtual override public {
        emit Log("F.bar Sobreescrita");
        super.bar(); // super
    }
}

contract G is E {
    function foo() virtual override public {
        emit Log("G.foo Sobreescrita");
        E.foo(); // direct
    }

    function bar() virtual override public {
        emit Log("G.bar Sobreescrita");
        super.bar(); // super
    }
}

contract H is F, G {
    function foo() override(F, G) public {
        F.foo(); // direct
    }

    function bar() override(F, G) public {
        super.bar(); // super
    }
}