interface Int0 {
    a: number
    b: string
}

interface Int1 {
    a: number,
    b: string,
    c: Date,
    d: Int0
}

var v1: Int1 = {
    a: 1,
    b: 'b',
    c: new Date(),
    d: {
        a: 2,
        b: 'c'
    }
}

// Variable con dos posibles tipos para sus elementos, Int0 e Int1
var v2: (Int0 | Int1);
v2 = {
    a: 3,
    b: 'a'
}
v2 = {
    a: 1,
    b: 'b',
    c: new Date(),
    d: {
        a: 2,
        b: 'c'
    }
}

// Array con dos posibles tipos para sus elementos, Int0 e Int1
var arr: (Int0 | Int1)[] = [
    {
        a: 1,
        b: 's'
    },
    {
        a: 1,
        b: 'b',
        c: new Date(),
        d: {
            a: 2,
            b: 'c'
        }
    }
]

// Función lambda que devuelve un producto de dos números
const f1 = (a: number, b: number): number => a * b;

console.log(f1(3, 3))

interface ICoordenada {
    x: number,
    y: number
}

const printCoordenada = (c: ICoordenada): void => {
    console.log(`x = ${c.x}, y = ${c.y}`)
}

var coordenadas: ICoordenada[] = [
    {x:1, y:1},
    {x:2, y:1},
    {x:3, y:1},
    {x:4, y:1}
]

coordenadas.forEach((c: ICoordenada) => {
    printCoordenada(c);
})

console.log("Filtro:")
coordenadas
    .filter((c: ICoordenada): boolean => c.x >= 3)
    .forEach((c: ICoordenada): void => {
        printCoordenada(c)
    })

interface IC {
    x: number,
    y: number
}

var coord: IC[] = [
    {x:1, y:1},
    {x:2, y:1},
    {x:3, y:1},
    {x:4, y:1},
    {x:5, y:1},
]

// Función con parámetros opcionales
const pagina = (p: number, u?: number) : IC[] => {
    if (u === undefined) {
        return coord.filter((c:IC, index:number):boolean => {
            return index >= p
        })
    } else {
        return coord.filter((c:IC, index:number):boolean => {
            return index >= p && index <= u
        })
    }
}

console.log(pagina(3))
console.log(pagina(1, 2))

// CLASES
class Persona {
    private _nombre: string;
    private _saldo: number;

    constructor(nombre:string, saldo:number = 0) {
        this._nombre = nombre;
        this._saldo = saldo;
    }

    getNombre(): string{
        return this._nombre
    }

    setNombre(nombre: string): void{
        this._nombre = nombre
    }
}

var pepe = new Persona("Pepe")
console.log(pepe.getNombre())

interface ICalculadora {
    sumar (a: number, b: number): number
    restar (a: number, b: number): number
    mul (a: number, b: number): number
    div (a: number, b: number): number
    raiz (a: number) : number
}

class Calculadora implements ICalculadora {
    sumar(a: number, b: number): number { return a+b }
    restar(a: number, b: number): number { return a-b }
    mul(a: number, b: number): number { return a*b }
    div(a: number, b: number): number { return a/b }
    raiz(a: number): number { return Math.sqrt(a) }
}

class CalculadoraLambda implements ICalculadora {
    sumar = (a: number, b: number): number => a+b
    restar = (a: number, b: number): number => a-b
    mul = (a: number, b: number): number => a*b
    div = (a: number, b: number): number => a/b
    raiz = (a: number): number => Math.sqrt(a)
}

var c1 = new Calculadora()
console.log(c1.raiz(9))

class Persona2 {
    constructor(private nombre:string){

    }

    get getNombre(){
        return this.nombre;
    }
}

var pepo = new Persona2("Pepo")
console.log(pepo.getNombre)

class C1 {
    private _a: number;
    private _b: number;

    constructor(a:number = 0, b?:number){
        this._a = a;
        this._b = b === undefined ? 0 : b
    }

    get getA(){
        return this._a;
    }

    get getB(){
        return this._b;
    }
}