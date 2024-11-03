const express = require("express")
const { Pool } = require("pg");

const customers = express.Router();
customers.use(express.json());

module.exports = {
    customers
}

const pool = new Pool({
    host:"localhost",
    port:7777,
    database:"postgres",
    user:"postgres",
    password:"123456"
})

customers.get("/get10", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM CUSTOMERS LIMIT 10")
        res.status(200).send(result.rows)
    } catch (error) {
        res.status(500).send(error)
    }
})