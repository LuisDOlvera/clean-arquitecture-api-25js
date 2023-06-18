const bcrypt = require("bcrypt");
const User = require("/")

/**
 * Registro --> Autenticación
 * 
 */

const login = async (email, textPlainPassword) => {
    //Validar que un usuario con ese correo exista
    const user = await User.findOne({ email })
}

const create = async (data) => {
    //Hashear la password
    const saltRounds = 10;
    
    const hashedPassword = await bcrypt.hash(data.password, saltRounds)

    //Cambiar la password en texto plano de la data a la que esta hasheada
    data.password = hashedPassword;

    //Crear el usuario con la password hasheada
    const user = await User.create(data);
    return user
    
}


module.exports = { create, login }

