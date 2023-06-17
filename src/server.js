const express = require("express");
const app = express();

//Routes
const routerKoder = require("./routes/koder.route");

//Middlewares para toda nuestra API
app.use(express.json());

//Middlewares de rutas
app.use("/koders", routerKoder);

/**
 * ---> Aqui se ponen todos los Middlewares (ejecución) 
 * ---> Endpoint de home
 * ---> Rutear
 */

//Endpoint de Home
app.get("/", (request, response) => {
    response.json("Nuestra API Sirve!!!");
})
//Exportamos app de express en server
//es6 imports/exports ---> module (Formas de exportar)
module.exports = app;