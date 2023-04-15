const { Deposito, Empresa, Productos, TipoDeposito } = require("../../db");

const allDepositos = async (req, res, next) => {
  try {
    req.body.allDepositos = await Deposito.findAll({
      includes: [Empresa, Productos, TipoDeposito],
    });
    next();
  } catch (error) {
    res.status(404).json("Error no se encontro allDepositos");
  }
};

module.exports = allDepositos;
