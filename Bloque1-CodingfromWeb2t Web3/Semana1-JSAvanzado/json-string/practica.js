const pg = require("pg")
const express = require("express")

const cliente = new pg.Client({
    host:"localhost",
    port:5435,
    database:"postgres",
    user:"postgres",
    password:"postgres"
})

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenido.")
})

app.get("/regiones", (req, res) => {
    res.send(query());
})

async function query(){
    await cliente.connect();

    const r = await cliente.query("select * from region", [])

    cliente.end();

    return r.rows
}

app.listen("5555")