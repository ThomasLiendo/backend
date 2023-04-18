const { TipoSuscripcion } = require("../../db");

const createTipoSuscripcion = async (req, res, next) => {
  try {
    const { tipo } = req.body;

    if (typeof tipo === "string") {
      const newTipoSuscripcion = await TipoSuscripcion.create({
        tipo,
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
module.exports = createTipoSuscripcion;
