/*
const web3Solana = require('@solana/web3.js');

let connection = new web3Solana.Connection(web3Solana.clusterApiUrl('devnet'), 'confirmed');

const sola = "7nB3H7Qo8qSCV2coPoHrFvDAK7gjiZkt9Wf8g8XKjABS"

let base58publicKey = new web3Solana.PublicKey(sola);

connection.getBalance(base58publicKey).then(saldo => {
    console.log(saldo)
}).catch(e => {
    console.log(e)
})
*/

var {Web3} = require("web3")
// provider
var testnet = "https://eth-goerli.g.alchemy.com/v2/iekvPifwvbCHJm4lMk7JPNyqzKCl6FrA"
// public account
var walletAddress = "0x3a4832a82658a1294FdA838FCb17F73988eb1bd3"
// conexión
const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
// obtenemos el balance
web3.eth.getBalance(walletAddress).then(i => {
// convertimos a ether
const etherValue = Web3.utils.fromWei(i, 'ether');
console.log(`${etherValue} ether` )
}).catch(e => {
console.log(e)
})