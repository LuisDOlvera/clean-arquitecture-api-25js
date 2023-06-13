require('dotenv').config() // lo más pronto de nuestra aplicación
const express = require("express");
const mongoose = require("mongoose");

/*
* 1.- Conexion a Base de Datos
* 2.- Prender el Servidor 
*/

console.log("Variables de entorno : ", process.env);
const { DB_USERNAME, DB_PASSWIRD, DB_HOST, DB_NAME } = process.env
//URL de Base de Datos
//Ocultar Base de Datos por medio de Variables de Entorno
const databaseURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWIRD}@c${DB_HOST}/${DB_NAME}` 

mongoose.connect(databaseURL)
.then(() => {
    console.log("We are connected to our database!!!");
})
.catch((err) => {
    console.log("We have an error", err);
})