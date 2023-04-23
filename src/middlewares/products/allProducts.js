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
    const { empresaId } = req.query;
    if (empresaId) {
      req.body.allProducts = await Producto.findAll({
        where: { EmpresaId: empresaId },
        order: [["nombre", "ASC"]],
        include: [
          Subcategoria,
          Deposito,
        ],
      });
      next();
    } else {
      req.body.allProducts = await Producto.findAll({
        order: [["nombre", "ASC"]],
        include: [
          Deposito,
          Subcategoria
        ],
      });
      next();
    }
  } catch (err) {
    console.log("error en allProducts", err);
    res.status(404);
  }
};

module.exports = allProducts;
