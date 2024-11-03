const pg = require("pg")
const csv = require("objects-to-csv")
const fs = require("fs")

const client = new pg.Client({
    host:"localhost",
    port:5435,
    database:"postgres",
    user:"postgres",
    password:"postgres"
})

async function query(tabla) {

    await client.connect()
    const resultado = await client.query(`select * from ${tabla}`)
    // console.log(resultado.rows)

    // Para convertir el resultado en un fichero JSON
    fs.writeFileSync(`./datos/${tabla}.json`, JSON.stringify(resultado.rows, null, 4))

    if(tabla === "orders") {
        // Devuelve todas las filas (...fila), pero convierte las columnas fechas de número a formato fecha ISO
        // y con solo año-mes-día (substring(0, 10))
        const filas = resultado.rows.map(fila => ({
            ...fila,
            order_date: new Date(fila.order_date).toISOString().substring(0, 10),
            required_date: new Date(fila.required_date).toISOString().substring(0, 10),
            shipped_date: new Date(fila.shipped_date).toISOString().substring(0, 10),
        }))

        // Para convertir el resultado en un fichero CSV
        new csv(filas).toDisk(`./datos/${tabla}.csv`)
    } else {
        // Para convertir el resultado en un fichero CSV
        new csv(resultado.rows).toDisk(`./datos/${tabla}.csv`)
    }
}

query("region")

const parser = require("csv-parser")

/*
var results = []

// Lee un fichero csv e inserta sus datos en un array
fs.createReadStream("./datos/customers.csv")
    .pipe(parser())
    .on("headers", headers => {
        console.log(headers)
    })
    .on("data", (data) => {
        results.push(data)
    })
    .on("end", () => {
        console.log(results)
    })
*/

function leerCsv(tabla) {
    return new Promise((resolve, reject) => {
        var datos = {
            headers : [],
            data : []
        }
        fs.createReadStream(`./datos/${tabla}.csv`)
            .on("error", err => {
                reject(err)
            })
            .pipe(parser())
            .on("headers", headers => {
                datos.headers = headers
            })
            .on("data", (data) => {
                datos.data.push(data)
            })
            .on("end", () => {
                resolve(datos)
            })
            .on("error", err => {
                reject(err)
            })
    })
}

(async () => {
    try {
        const res = await leerCsv("region")
        console.log(res)
    } catch (err) {
        console.log("Ha ocurrido un error:", err)
    }
})()

// Promise
/*
leerCsv("region")
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Ejecución finalizada.")
    })
*/