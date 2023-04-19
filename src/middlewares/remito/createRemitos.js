const { Remito } = require("../../db");

const createRemitos = async (req, res, next) => {
  try {
    const { fecha, empresa, cantidad } = req.body;

    if (typeof empresa === "string") {
      const newRemito = await Remito.create({
        fecha,
        empresa,
        cantidad,
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
module.exports = createRemitos;
