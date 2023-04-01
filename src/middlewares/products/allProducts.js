const { Producto, Op } = require("../../db");

const allProducts = async (req, res, next) => {
    try{
        req.body.allProducts = await Producto.findAll();
        next();
    }catch(err){
        console.log("error en allProducts");
        res.status(404);
    }
}

module.exports = allProducts;