const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello codecrypto")
})

app.get("/ping", (req, res) => {
    res.send({fecha: new Date()})
})
app.listen("5555")