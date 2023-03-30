const { Usuario, Op } = require("../../db");

const createUser = async (req, res, next) => {
    try{
        const {nombre, apellido, email, clave} = req.body;
        if(typeof nombre === "string" || typeof apellido === "string" || typeof email === "string" || typeof clave === "string"){
            const newUser = await Usuario.create({
                nombre,
                apellido,
                email,
                clave
            })
            next();
        }else{
            throw new Error("los algun datos pasados por body son incorrectos")
        }
    }catch(err){
        console.log("error en createUser")
        console.log(err.message)
        res.status(412).send("El usuario no se ah creado, error en los campos")
    }
}

module.exports = createUser;