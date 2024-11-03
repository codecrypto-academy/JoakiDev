const express = require("express")
const { Web3 } = require("web3")
const cors = require('cors');

const URL_INFURA = "https://mainnet.infura.io/v3/919fa948f93849808f10cc3d891d4779"

const app = express()
const web3 = new Web3(URL_INFURA)
app.use(cors());
app.listen(3333)

app.get("/", async (req, res) => {
    try {
        const ultimoBloque = await web3.eth.getBlockNumber();
        res.send(convertJSON(ultimoBloque))
    } catch (error) {
        res.status(500).send({ mensaje: error.mensaje })
    }
})

app.get("/bloque/:bloque", async (req, res) => {
    try {
        const bloque = await web3.eth.getBlock(req.params.bloque)
        res.send(convertJSON(bloque))
    } catch (error) {
        res.status(500).send({ mensaje: error.mensaje })
    }
})

app.get("/tx/:tx", async (req, res) => {
    try {
        const tx = await web3.eth.getTransaction(req.params.tx)
        res.send(convertJSON(tx))
    } catch (error) {
        res.status(500).send({ mensaje: error.mensaje })
    }
})

app.get("/balance/:address", async (req, res) => {
    try {
        const balance = await web3.eth.getBalance(req.params.address)
        res.send({ balance: JSON.parse(balance), ethers: JSON.parse(balance) / 1e18, ethers2: web3.utils.fromWei(balance, 'ether') })
    } catch (error) {
        res.status(500).send({ mensaje: error.mensaje })
    }
})

function convertJSON(item) {
    return JSON.parse(JSON.stringify(item, (key, value) =>
        typeof value === 'bigint'
            ? JSON.parse(value)
            : value
    ));
}