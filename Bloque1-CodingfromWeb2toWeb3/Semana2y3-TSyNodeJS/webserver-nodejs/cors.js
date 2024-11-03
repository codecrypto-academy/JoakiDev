const express = require ("express")
const cors = require ("cors")

const app = express();
app.use(cors())
app.listen("3345")

app.get("/", (req, res) => {
    res.send("Respuesta desde 3345")
})