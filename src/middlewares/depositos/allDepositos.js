const { Deposito } = require("../../db");

const allDepositos = async (req, res, next) => {
  try {
    req.body.allDepositos = await Deposito.findAll();
    next();
  } catch (error) {
    res.status(404).json("Error no se encontro allDepositos");
  }
};

module.exports = allDepositos;
