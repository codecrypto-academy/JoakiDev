const mssql = require("mssql")
const config = {
    user: "sa",
    password: "my-s3cr3t-pw",
    database: "northwind",
    server: "localhost",
    pool: {
        min: 0,
        max: 10
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

async function q(sql) {
    try{
        await mssql.connect(config)
        const resultados = await mssql.query(sql)
        return resultados
    } catch (error) {
        return {error}
    }
}

q("select * from Customers").then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})