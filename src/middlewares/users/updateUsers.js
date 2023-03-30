const { Usuario, Op } = require("../../db");

const updateUser = async (req, res, next) => {
    try{
        const {nombre, apellido, email, clave, id} = req.body;
        await Usuario.update({
            nombre,
            apellido,
            email,
            clave,
        },{where: {id:id}})

        next();
    }catch(err){
        console.log("error en updateUser")
        console.log(err.message)
        res.status(412).json({resultado:`error en la actualización del usuario`})
    }
}

module.exports = updateUser;