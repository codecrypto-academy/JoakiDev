const express = require ("express")

const app = express()

// Usa ficheros dentro de la carpeta public. Por defecto usa el que se llame index.html
// A los demás se accede poniendo "/" y su nombre. Ejemplo: http://localhost:3344/p1.html
// Para usar otro archivo como el index, se debe añadir como propiedad index
app.use(express.static("public", {index:"myIndex.html"}))

// Se puede configurar para que apunte a otro directorio con otra URL
app.use("/docs", express.static("docs"))

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