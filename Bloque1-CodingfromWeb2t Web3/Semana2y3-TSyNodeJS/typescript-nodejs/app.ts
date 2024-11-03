import express, { Application, NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app:Application = express()

// Los Middleware son cosas que suceden antes de que entre la petición
app.use(morgan("tiny"))

// El body de la peticion puede venir de varias maneras. bodyParser permite analizar el body y extraer la información:

// a=22&b=22
app.use(bodyParser.urlencoded({extended:false}))
// {a:1,b:22}
app.use(bodyParser.json())

// MiddleWare
app.use((req:Request, res:Response, next:NextFunction) => {
    // Enviar un header llamado X-Start con "new Date().toISOString()" como contenido
    res.setHeader("X-Start", new Date().toISOString())
    next();
})

app.get("/", async(req:Request, res:Response) => {
    res.status(200).send("Hola")
})

app.post("/formulario", async(req, res) => {
    // Recogemos los parámetros del body y la URL
    const datos = {
        body: req.body,
        param: req.query
    }

    // Accesos a BD...
    res.setHeader("X-End", new Date().toISOString())
    res.send(JSON.stringify(datos))
})

app.listen(4444)

// COMANDOS CURL DE PRUEBA:
// curl -d "a=22&b=12" localhost:4444/formulario?c1=1^&c2=juan
// curl -H “content-type:application/json” -d “{\”a\”:1}” http://localhost:5555/f1