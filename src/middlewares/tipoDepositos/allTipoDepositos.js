const { TipoDeposito, Deposito} = require("../../db");

const allTipoDepositos = async (req, res, next) => {
  try {
    req.body.allTipoDepositos = await TipoDeposito.findAll({
      includes: [Deposito],
    });
    next();
  } catch (error) {
    res.status(404).json("Error no se encontro allTipoDepositos");
  }
};

module.exports = allTipoDepositos;
