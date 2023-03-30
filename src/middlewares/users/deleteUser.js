const { Usuario, Op } = require("../../db");

const deleteUser = async (req, res, next) => {
    try{
        const id = req.body.id
        const usuario = await Usuario.findOne({where:{id}})
        if(usuario.id > 0){
            await Usuario.destroy({where:{id:usuario.id}});
            req.body.eliminado =  usuario.id;
            next();
        }else{
            throw new Error(`no existe el usuario con esa ID: ${id}`)
        }
    }catch(err){
        console.log("error en deleteUser");
        console.log(err)
        res.status(404).send(`usuario no encontrado`);
    }
}

module.exports = deleteUser;