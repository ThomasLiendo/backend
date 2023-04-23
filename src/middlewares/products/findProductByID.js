const { Producto, Subcategoria, Deposito, Op } = require("../../db");

const allProducts = async (req, res, next) => {
    try{
        const id = req.params.id;
        req.body.productById = {status:200, resultado: await Producto.findOne({where:{id},include: [
            { 
              model: Subcategoria, 
              attributes: ["id", "nombre","descripcion"],
              through: {
                attributes: []
              }
            },
            Deposito,
          ],})};
        console.log("All Products")
        next();
    }catch(err){
        console.log("error en allProducts");
        req.body.productById = {status:404, resultado:err.message}
    }
}

module.exports = allProducts;