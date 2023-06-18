const Mentor = require("../models/mentor.model");

//Función para crear Mentor
const create = (data) => {
    const createdMentor = Mentor.create(data);
    return createdMentor;
}

//Función para enlistar mentors
const list = (filters) => {
    const filteredMentors = Mentor.find(filters);
    return filteredMentors;
}

const update = async (id, data) => {
    const mentor = await Mentor.findById({ _id: id })
    let newMentor = mentor

    //Combino data nueva con la que ya está
    for(let key in data) {
        if(key !== "generation") {
            newMentor[key] = data[key]
        }
    }

    if(data?.generation) { //Opcional .genetarion puede o no estar en el objeto
        //Aquí hago todas mis generaciones falsas
        let newGenerations = newMentor.generations.map(generation => {
        return {
            name:generation.name,
            isActive: false
        }
        });

        //Agrego mi nueva generacion que manda el cliente como activa
        newGenerations.push({
        name: data.generation.name,
        isActive: true
        });

        //A mi mentor le agrego sus Nuevas Generaciones
        newMentor.generations = newGenerations;
    }
    

    //Actualizar a la base de datos
    const updatedMentor = await Mentor.findByIdAndUpdate(id, newMentor, { returnDocument: "after" })

    return updatedMentor;

    //Regresarlo

}

//Exportamos
module.exports = { create, list, update }