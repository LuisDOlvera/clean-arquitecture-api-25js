const express = require("express");
const app = express();

//Routers
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");


//Middlewares para toda nuestra API (Parceo)
app.use(express.json());

//Middlewares de rutas
app.use("/koders", routerKoder);
app.use("/mentors", routerMentor);

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