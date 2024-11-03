var factura = {
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
function calcularTotal(f){
    var total = 0
    for(li of f.lineas){
        total += li.cantidad * li.precio
    }
    return total
}

console.log(calcularTotal(factura))