interface ICliente {
    nombre:string
    id:string
    dir:IDir
}

interface IDir {
    calle:string
    dp:number
}

interface ILinea {
    nombre:string
    cantidad:number
    precio:number
}

interface IFactura {
    id:number
    fecha:Date
    cliente:ICliente
    lineas:ILinea[]
}

var factura:IFactura = {
    id: 1,
    fecha: new Date(),
    cliente: {
        nombre: "juan",
        id: "id1",
        dir:{
            calle:"av la estacion",
            dp:5876
        }
    },
    lineas: [
        {
            nombre: "producto1",
            cantidad: 1,
            precio: 12.5
        },
        {
            nombre: "producto2",
            cantidad: 3,
            precio: 1.5
        },
    ]
}
function calcularTotal1(f:any):number{
    var total = 0
    for(var li of f.lineas){
        total += li.cantidad * li.precio
    }
    return total
}

console.log(calcularTotal1(factura))