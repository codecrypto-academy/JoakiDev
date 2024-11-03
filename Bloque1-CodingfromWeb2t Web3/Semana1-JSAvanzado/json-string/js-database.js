/*
const { Client } = require('pg')

const client = new Client({
    host: 'pgadmin.jvh.kfs.es',
    port: 5433,
    database: 'postgres',
    user: 'lector',
    password: 'lector',
})
const query = async () => {
    await client.connect()
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
    await client.end()
}

(async () => {
    await query()
})()
*/


const pg = require("pg")

const client = new pg.Client({
    host:"localhost",
    port:5435,
    database:"postgres",
    user:"postgres",
    password:"postgres"
})


async function query(pais, ciudad) {
    try {
        await client.connect()
    } catch (error) {
        console.log(error.message)
        return
    }

    try {
        const r1 = await client.query("select product_name from products", []);
        const r2 = await client.query("select * from customers where country = $1 AND city = $2", [pais, ciudad]);
        console.log(r2.rows)
    } catch (error) {
        console.log(error.message)
    } finally {
        await client.end();
    }
}

query('Spain', 'Sevilla');


// Ejemplo con Promise (no se va a usar)
/*
client.connect().then(() => {
    client.query("select product_name from products", []).then(data => {
        console.log(data.rows)
        client.end();
    }).catch(e => {
        console.log(e.message)
    })
}).catch(e => {
    console.log("error", e.message)
})
*/