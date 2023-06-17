const express = require("express");
const { list, getbyId, create, updatedKoder, deletedKoder } = require("../usecases/koder.usecase");

//Router
//Un conjunto de rutas ern una aplicacion
const router = express.Router();

/**
 * Las Rutas
 * Aqui vamos a leer el request y response
 */

//   /koders
router.get("/", async (req, res) => {
    try{
        const koders = await list();
        res.json({
            success: true,
            data: koders
        })
    }catch(err) {
        res.status(400);
        res.json({
            success: false,
            message: err.message
        })
    }
})

//Obtener Koder
//path params --> id ---> /koders/:id
router.get("/:id", async (req, res) => {
    try{
        const koders = await getbyId(req.params.id) //Promesa
        if(!koders) {
            const error = new Error("Koder not found");
            error.status = 404; //not found
            throw error; // return
        }
    res.json({
        success:true,
        data: koders
    })
    }catch(err) {
        res.status(err.status || 500);
        res.json({
            success: false,
            message: err.message
        })
    }
})

//Crear Koder
// /koders
router.post("/", async (req, res) => {
    try{
        const koders = await create(req.body)
        res.status(201);
        res.json({
            success: true,
            data: koders
        })
    }catch(err) {
        res.status(err.status || 500);
        res.json({
            success: false,
            message: err.message   
        })
    }
})

//Modificar Koder
router.patch("/:id", async (req, res) => {
    const { body, params } = req
    try{
        const koders = await updatedKoder(params.id, body, { returnDocument : "after" });
        res.status(200);
        res.json({
            success: true,
            data: koders,
            message: "El Koder Fue Actualizado con Exito!!"
        })
    }catch(err){
        res.status(err.status || 500);
        res.json({
            success: false,
            message: err.message
        })    
    }
})

//Eliminar Koder
//Obtener Koder
//path params --> id ---> /koders/:id
router.delete("/:id", async (req, res) => {
    try{
        const koders = await deletedKoder(req.params.id) //Promesa
        if(!koders) {
            const error = new Error("Koder not found");
            error.status = 404; //not found
            throw error; // return
        }
    res.json({
        success:true,
        data: koders
    })
    }catch(err) {
        res.status(err.status || 500);
        res.json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;


