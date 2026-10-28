// configurar express app.use le de un orden para cada petición 

const express = require("express");
const app = express();

//1. convertir el cuerpo json de la peticion req.body 

app.use(express.json());

//2. Rutas

app.get("/api/salud", (req,res) => {
    res.json({ estado: "ok"});
});

module.exports = app;
