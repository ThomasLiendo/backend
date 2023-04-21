const { Factura } = require("../../db");

const allFacturas = async (req, res, next) => {
  try {
    const { empresaId } = req.query;
    if (empresaId) {
      req.body.allFacturas = await Factura.findAll({
        where: { EmpresaId: empresaId },
        order: [["id", "DESC"]],
      });
      next();
    } else {
      req.body.allFacturas = await Factura.findAll({ order: [["id", "DESC"]] });
      next();
    }
  } catch (err) {
    console.log("error en allFacturas");
    res.status(404);
  }
};

module.exports = allFacturas;
