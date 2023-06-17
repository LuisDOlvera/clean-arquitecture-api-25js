const Koder = require("../models/koder.model");


/**
 * Crear 
 * Actualizar
 * Obtener
 * Enlistar
 * Eliminar
 * 
 * method --> create
 * await Model.create()
 * awayt Model.findById
 * 
 * Funciones
 */

//Enlistar koders
const list = () => {
    //Accion ->>> use case;
    const koders = Koder.find(); 
    return koders;
}

//Obtener Koder por id
const getbyId = (id) => {
    const koders = Koder.findById(id)
    return koders;
}

//Crear Koder
const create = (data) => {
    const koders = Koder.create(data);
    return koders;
}

//Modificar Koder
const updatedKoder = (id, body) =>{
    const koders = Koder.findByIdAndUpdate(id, body);
    return koders;
}

//Eliminar KOder
const deletedKoder = (id) => {
    const koders = Koder.findByIdAndDelete(id);
    return koders;
}

module.exports = { list, getbyId, create, updatedKoder, deletedKoder } // { list: list } exportamos un objeto


//Crear koder
    // Actualizar koder
    //Eliminar koder
