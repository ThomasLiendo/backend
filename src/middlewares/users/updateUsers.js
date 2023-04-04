const { Usuario, Op } = require("../../db");

const updateUser = async (req, res, next) => {
    try{
        const {nombre, apellido, email, clave} = req.body;
        const id = req.params.id
        const usuario = await Usuario.findAll({where:{id}});
        if(usuario.lenght !== 0){
            await Usuario.update({
                nombre,
                apellido,
                email,
                clave,
            },{where: {id:id}})
            req.body.resultado = {status:"200", respuesta:`el Usuario se ah actualizado exitosamente por el ${nombre ? `nombre: ${nombre} `:""} ${apellido ? `apellido: ${apellido} `:""} ${email ? `email: ${email}`:""} `};
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