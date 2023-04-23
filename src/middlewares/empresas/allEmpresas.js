const {
  Empresa,
  Usuario,
  Deposito,
  Producto,
  Categoria,
  Subcategoria,
  Op,
} = require("../../db");

const allEmpresa = async (req, res, next) => {
  try {
    req.body.AllEmpresas = await Empresa.findAll({
      include: [Usuario,
      Deposito]
    });
    next();
  } catch (err) {
    console.log("error en allEmpresa");
    res.status(404);
  }
};

module.exports = allEmpresa;
