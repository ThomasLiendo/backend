const { Usuario, Op } = require("../../db");

const updateUser = async (req, res, next) => {
    try{
        const {nombre, apellido, email, clave, id} = req.body;
        const usuario = await Usuario.findAll({where:{id}});
        if(usuario.lenght !== 0){
            console.log(usuario)
            await Usuario.update({
                nombre,
                apellido,
                email,
                clave,
            },{where: {id:id}})
            req.body.resultado = {status:"200", respuesta:`el Usuario ${nombre} ${apellido} con email: ${email} se ah creado exitosamente`};
            next();
        }else{
            throw new Error(`Usuario con el ${id} no se ah encontrado`)
        }

    }catch(err){
        console.log("error en updateUser")
        console.log(err)
        res.status(412).json({resultado:err})
    }
}

module.exports = updateUser;