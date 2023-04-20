const { Factura } = require("../../db");

const createFacturas = async (req, res, next) => {
  try {
    const { nota, total } = req.body;

    if (typeof nota === "string") {
      const newFactura = await Factura.create({
        nota,
        total,
      });
      next();
    } else {
      throw new Error("datos pasados por body son incorrectos");
    }
  } catch (err) {
    req.body.resultado = { status: "404", respuesta: err.message };

    next();
  }
};
module.exports = createFacturas;
