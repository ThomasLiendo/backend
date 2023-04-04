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
            req.body.resultado = {status:"200", respuesta:`el Usuario ${usuario.nombre} ${usuario.apellido} con email: ${usuario.email} se ah actualizado exitosamente por nombre: ${nombre}, apellido: ${apellido}, email: ${email}`};
            next();
        }else{
            throw new Error(`Rol con el ID: ${id} no se ah encontrado`)
        }

    }catch(err){
        console.log("error en updateRol")
        console.log(err)
        req.body.resultado = {status:404, resultado:err.message}
        next();

    }
}

module.exports = updateUser;