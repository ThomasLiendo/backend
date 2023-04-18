const { TipoSuscripcion } = require("../../db");

const allTipoSuscripcion = async (req, res, next) => {
  try {
    req.body.allTipoSuscripcion = await TipoSuscripcion.findAll();
    next();
  } catch (error) {
    res.status(404).json("Error no se encontro allTipoDepositos");
  }
};

module.exports = allTipoSuscripcion;
