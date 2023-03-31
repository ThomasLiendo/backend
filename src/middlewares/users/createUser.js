const { Usuario, Op } = require("../../db");

const createUser = async (req, res, next) => {
    try{
        const {nombre, apellido, email, clave} = req.body;
        console.log(nombre)
        if(typeof nombre !== "string" || nombre === undefined){
            throw new Error(`El Nombre del Usuario debe ser unicamente texto, y has insertado ${nombre === undefined ? "texto vacio": nombre}`)
        } 
        if(typeof apellido !== "string" || apellido === undefined){
            throw new Error(`El Apellido del Usuario debe ser unicamente texto, y has insertado ${apellido === undefined ? "texto vacio": apellido}`)
        } 
        if(typeof nombre === "string" && typeof apellido === "string" && typeof email === "string" && typeof clave === "string"){
            const newUser = await Usuario.create({
                nombre,
                apellido,
                email,
                clave
            })
            req.body.resultado = {status:"200", respuesta:`el Usuario ${nombre} ${apellido} con email: ${email} se ah creado exitosamente`};
            next();
        }else{
            throw new Error("datos pasados por body son incorrectos")
        }
    }catch(err){
        console.log("error en createUser")
        console.log(err.message)
        req.body.resultado = {status:"404", respuesta:err.message};
        console.log(req.body.resultado)
        next();
    }
}

module.exports = createUser;