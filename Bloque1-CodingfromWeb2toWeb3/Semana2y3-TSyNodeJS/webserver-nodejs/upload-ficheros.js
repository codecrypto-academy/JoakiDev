const express = require ("express")
const fileUpload = require("express-fileupload")

const app = express()

app.use(express.static("public"))
app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024}
}))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(3344)

app.post("/upload-fichero", async (req, res) => {
    // Subir fichero a una carpeta en el proyecto
    const f1 = req.files.file1
    await f1.mv(`uploads/${f1.name}`)

    res.send({body:req.body, fichero:{
        nombre : req.files.file1.name
    }})
})

app.post("/upload-ficheros", async (req, res) => {
    // Subir ficheros a una carpeta en el proyecto
    for([index, file] of req.files.ficheros.entries()) {
        await file.mv(`uploads/${file.name}`)
    }

    res.send("Ficheros subidos")
})