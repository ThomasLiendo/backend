const { OrdenDeCompra } = require("../../db");

const allOrdenDeCompras = async (req, res, next) => {
  try {
    req.body.allOrdenDeCompras = await OrdenDeCompra.findAll();
    next();
  } catch (err) {
    console.log("error en allOrdenDeCompras");
    res.status(404);
  }
};

module.exports = allOrdenDeCompras;
