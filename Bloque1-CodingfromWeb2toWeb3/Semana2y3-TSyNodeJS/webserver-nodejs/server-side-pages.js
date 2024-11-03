const express = require ("express")

const app = express();

app.set('view engine', 'pug')
app.listen("3344");

app.get("/template1", (req, res) => {
    res.render('t1.pug', {title:"Curso 2023", message:"Hola a todos desde pug"})
})