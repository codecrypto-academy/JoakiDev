const express = require ("express")
const Minio = require("minio")
const fileUpload = require("express-fileupload")

const app = express();
app.use(express.static("public", {index:"myIndex.html"}))
app.use(express.json())
app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024}
}))

const minioClient = new Minio.Client({
    endPoint:"localhost",
    port:9009,
    accessKey:"minioadmin",
    secretKey:"minioadmin",
    useSSL:false
});

app.listen("3344");

app.post("/minio/createBucket", async (req, res) => {
    try {
        await minioClient.makeBucket(req.body.nombre, 'us-east-1')
        res.status(200).send({resultado:"OK"})
    } catch (error) {
        res.status(500).send({error})
    }
});

app.post("/minio/addFile", async (req, res) => {
    const bucket = req.body.bucket;
    const file = req.files.fichero;

    try {
        await minioClient.putObject(bucket, file.name, file.data)
        res.status(200).send({resultado:"OK"}) 
    } catch (error) {
        res.status(500).send({error})
    }
});

app.get("/minio/:bucket/:fichero", async (req, res) => {
    try {
        const dataStream = await minioClient.getObject(req.params.bucket, req.params.fichero)
        dataStream.pipe(res)
    } catch (error) {
        res.status(500).send({error})
    }
});

app.delete("/minio/:bucket/:fichero", async (req, res) => {
    try {
        await minioClient.removeObject(req.params.bucket, req.params.fichero)
        res.status(200).send({resultado:"BORRADO"}) 
    } catch (error) {
        res.status(500).send({error})
    }
})