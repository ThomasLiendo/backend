const { Usuario, Op } = require("../../db");

const deleteUser = async (req, res, next) => {
    try{
        const id = req.params.id
        const usuario = await Usuario.findOne({where:{id}})

        if(!usuario){
            throw new Error(`No existe el producto con el ID: ${id}`)
        }
        if(usuario.id > 0){
            await Usuario.destroy({where:{id:usuario.id}});
            req.body.eliminado =  {status:200,resultado:`el Rol ${usuario.nombre} ah sido eliminado`};
            next();
        }else{
            throw new Error(`no existe el usuario con esa ID: ${id}`)
        }
    }catch(err){
        console.log("error en deleteUser");
        console.log(err)
        req.body.eliminado =  {status:404,resultado:err.message};
    }
}

module.exports = deleteUser;