const express = require ("express")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(3344)

app.post("/echoPost", (req, res) => {
    // Devolver el body de la petición
    res.send({body:req.body})
})

app.post("/echoParamsPost/:cliente/facturas/:factura", (req, res) => {
    res.send({
        body:req.body,
        query:req.query,
        params:req.params
    })
})

app.get("/echoParamsGet/:cliente/facturas/:factura", (req, res) => {
    res.send({
        body:req.body,
        query:req.query,
        params:req.params
    })
})