const express = require ("express")

const app = express()

app.listen(3344)

app.get("/", (req, res) => {
    res.send("Hola");
})

app.get("/hola-mundo", function (req, res) {
    res.send("Hola Mundo");
})

app.post("/addUser", function (req, res) {
    res.status(201).send("He añadido un usuario");
})