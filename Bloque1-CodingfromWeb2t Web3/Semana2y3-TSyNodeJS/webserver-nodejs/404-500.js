const express = require ("express")

const app = express();

app.use(express.static("public"))

app.listen("3344");

app.get("/error", (req, res) => {
    throw new Error("Se ha producido un error.")
})

// Para que la traza no aparezca, se tiene que definir el Middleware después de los endpoints que pueden dar error
app.use((error, req, res, next) => {
    res.status(500).send(error.message)
})

app.get("*", (req, res) => {
    res.redirect("/404.html")
})