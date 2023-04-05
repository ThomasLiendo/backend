const {
  Producto,
  Subcategoria,
  Categoria,
  Empresa,
  Deposito,
  Op,
} = require("../../db");

const allProducts = async (req, res, next) => {
  try {
    req.body.allProducts = await Producto.findAll({
      include: [
          {
            model: Subcategoria,
            include: Categoria
          },
          Empresa,
          Deposito
        ],
      },
    );
    next();
  } catch (err) {
    console.log("error en allProducts", err.message);
    res.status(404);
  }
};

module.exports = allProducts;
