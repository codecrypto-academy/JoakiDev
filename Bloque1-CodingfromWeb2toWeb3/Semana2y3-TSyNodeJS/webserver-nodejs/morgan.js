const express = require ("express")
const morgan = require ("morgan")
const fs = require("fs")

const app = express()

// Guardar los logs en un fichero
const logOutput = fs.createWriteStream("uploads/logs.txt", {
    flags:"a"
})

const logOutputError = fs.createWriteStream("uploads/logErrores.txt", {
    flags:"a"
})

app.use(morgan('tiny', {
    // Solo sacar un log de los códigos menores que 400
    skip: (req, res) => res.statusCode >= 400,
    stream: logOutput
}))

app.use(morgan('combined', {
    // Solo sacar un log de los código 400 o mayores
    skip: (req, res) => res.statusCode < 400,
    stream: logOutputError
}))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(3344)

app.get("/", (req, res) => {
    res.send("Hola");
})