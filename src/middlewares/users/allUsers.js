const { Usuario, Op } = require("../../db");

const allUser = async (req, res, next) => {
    try{
        req.body.allUsers = await Usuario.findAll();
        next();
    }catch(err){
        console.log("error en allUser");
        res.status(404);
    }
}

module.exports = allUser;