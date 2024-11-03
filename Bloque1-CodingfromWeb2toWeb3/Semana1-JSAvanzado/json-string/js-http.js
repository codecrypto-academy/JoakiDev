const axios = require("axios");

/*
async function getDatos() {
    const r = await axios.get("https://jsonplaceholder.typicode.com/users")
    return r
}

(async () => {
    var datos = await getDatos()
    console.log(JSON.stringify(datos.data, null, 4))
})()
*/
//--------------------

async function getDatos() {
    try {
        const r = await axios.get("https://reqbin.com/echo/get/json/page/2")
    } catch (e){
        return {e}
    }
    return r
}

(async () => {
    var datos = await getDatos()
    if (datos.data){
        console.log(JSON.stringify(datos.data, null, 4))
    } else {
        console.log(JSON.stringify(datos, null, 4))
    }
})()