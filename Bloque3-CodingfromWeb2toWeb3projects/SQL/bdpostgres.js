const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "my-secret-pw",
    database: "postgres",
    host: "localhost",
    // IP de mi ordenador
    //host: "192.168.1.95",
    port: 5432
})

function q(sql, parametros) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if(err){
                reject(err)
            }
            client.query(sql, parametros, (err, res) => {
                done()
                if(err){
                    reject(err)
                } else {
                    resolve(res.rows)
                }
            })
        })
    })
}

q("select * from Customers limit 10", []).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log("Esta saldrá siempre")
})