const express = require("express")
const app = express()

app.listen(3000)

app.get("/", (req, res) => {
    res.send("Inicio")
})

app.get("/welcome", (req, res) => {
    res.send("Welcome")
})

app.get("*", (req, res) => {
    res.send("404 - Not Found")
})