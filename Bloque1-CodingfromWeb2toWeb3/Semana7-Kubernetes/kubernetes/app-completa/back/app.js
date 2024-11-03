const express = require("express")
const cors = require("cors");
const { customers } = require("./customers");

const app = express();
//app.use(cors);

app.listen(5430);

//Routes
app.use("/customers", customers)

app.get("/", (req, res) => {
    res.send("Bienvenido")
})

app.get("*", (req, res) => {
    res.send("404 - Not Found")
})