const express = require("express")
const app = express()

app.listen(13000)

app.get("/", (req, res) => {
    res.send("Hola desde contenedor")
})