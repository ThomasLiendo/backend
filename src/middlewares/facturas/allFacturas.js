const { Factura } = require("../../db");

const allFacturas = async (req, res, next) => {
  try {
    req.body.allFacturas = await Factura.findAll();
    next();
  } catch (err) {
    console.log("error en allFacturas");
    res.status(404);
  }
};

module.exports = allFacturas;
