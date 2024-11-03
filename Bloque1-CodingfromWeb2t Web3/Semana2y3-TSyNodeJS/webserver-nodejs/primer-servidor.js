const express = require ("express")

const app = express()

app.listen(3344)

app.get("/", (req, res) => {
    res.send("Hola");
})

app.get("/hola-mundo", function (req, res) {
    res.send("Hola Mundo");
})

app.get("/problema", function (req, res) {
    res.status(500).send("Descripción del problema");
})