const express = require ("express")
const { Pool } = require("pg")

const app = express()

const pool = new Pool({
    host:"localhost",
    port:5435,
    database:"postgres",
    user:"postgres",
    password:"postgres"
})

app.listen(3344)

app.get("/", (req, res) => {
    res.send("Hola");
})

app.get("/bd/test", async (req, res) => {
    try {
        const respuesta = await pool.query("select now() fecha");
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send({error})
    }
})

app.get("/bd/customers", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from customers");
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send({error})
    }
})

app.get("/bd/customers/:id", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from customers where customer_id = $1", [req.params.id]);
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send({error})
    }
})

app.get("/bd/orders/:cliente", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from orders where customer_id = $1", [req.params.cliente]);
        res.send(respuesta.rows)
    } catch (error) {
        res.status(500).send({error})
    }
})

app.get("/bd/orders/:cliente/:id", async (req, res) => {
    try {
        const respuesta = await pool.query("select * from orders where customer_id = $1 and order_id = $2", 
            [req.params.cliente, req.params.id]);
        if(respuesta.rows.length == 0){
            res.status(404).send({respuesta:"No existen registros."})
        }
        res.send(respuesta.rows[0])
    } catch (error) {
        res.status(500).send({error})
    }
})