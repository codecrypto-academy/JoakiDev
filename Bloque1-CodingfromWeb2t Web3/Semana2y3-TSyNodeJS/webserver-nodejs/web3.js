const express = require ("express")
const { Web3 } = require("web3")

const WEB3_PROVIDER = "https://goerli.infura.io/v3/6efcddf76f604505952a786a4581b41e"

const app = express();
app.use(express.urlencoded())
app.use(express.json())

const web = new Web3(WEB3_PROVIDER)

app.listen("3344")

app.get("/web3/balance/:address", async (req, res) => {
    try {
        const balance = await web.eth.getBalance(req.params.address)
        const balanceEth = parseFloat(balance) / 1e18
        res.send(balanceEth.toString())
    } catch (error) {
        res.status(500).send({error})
    }
})

app.get("/web3/eth/blocks/:numero", async (req, res) => {
    try {
        const bloque = await web.eth.getBlock(req.params.numero)
        res.send(bloque)
    } catch (error) {
        res.status(500).send({error})
    }
})