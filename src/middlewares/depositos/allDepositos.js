const { Deposito, Empresa, Productos } = require("../../db");

const allDepositos = async (req, res, next) => {
  try {
    req.body.allDepositos = await Deposito.findAll({
      include:[Empresa, Productos]
    });
    next();
  } catch (error) {
    res.status(404).json("Error no se encontro allDepositos");
  }
};

module.exports = allDepositos;
