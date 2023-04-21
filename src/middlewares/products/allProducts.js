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
          {
            model: Subcategoria,
            attributes: ["id", "nombre", "descripcion"],
            through: {
              attributes: [],
            },
          },
          Deposito,
        ],
      });
      next();
    } else {
      req.body.allProducts = await Producto.findAll({
        order: [["nombre", "ASC"]],
        include: [
          {
            model: Subcategoria,
            attributes: ["id", "nombre", "descripcion"],
            through: {
              attributes: [],
            },
          },
          Deposito,
        ],
      });
      next();
    }
  } catch (err) {
    console.log("error en allProducts", err.message);
    res.status(404);
  }
};

module.exports = allProducts;
