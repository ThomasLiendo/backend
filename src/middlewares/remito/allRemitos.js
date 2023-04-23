const { Remito } = require("../../db");

const allRemitos = async (req, res, next) => {
  try {
    const { empresaId } = req.query;
    if (empresaId) {
      req.body.allRemitos = await Remito.findAll({
        where: { EmpresaId: empresaId },
        order: [["id", "DESC"]],
      });
      next();
    } else {
      req.body.allRemitos = await Remito.findAll({ order: [["id", "DESC"]] });
      next();
    }
  } catch (err) {
    console.log("error en allRemitos");
    res.status(404);
  }
};

module.exports = allRemitos;
