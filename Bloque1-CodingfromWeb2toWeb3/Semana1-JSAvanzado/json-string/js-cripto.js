const cripto = require('crypto')

function hash(valor, algoritmo) {
    var hash = cripto.createHash(algoritmo).update(valor)
    console.log(hash.digest('hex'))
}

// console.log(hash('welcome', 'md5'))

const key = cripto.randomBytes(32)
const iv = cripto.randomBytes(16)
function encrypt(text) {
    let cipher = cripto.createCipheriv("aes-256-cbc", Buffer.from(key), iv)
    let encriptado = cipher.update(text)

    encriptado = Buffer.concat([encriptado, cipher.final()])
    return encriptado
}

function decrypt(text) {
    let d = cripto.createDecipheriv("aes-256-cbc", key, iv)
    let des = d.update(text)
    des = Buffer.concat([des, d.final()])
    return des.toString();
}

var r = encrypt("Esto es lo que hay que encriptar")
console.log("Encriptado: ", r.toString('hex'))
console.log("Desencriptado: ", decrypt(r))