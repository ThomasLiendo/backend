const { Deposito } = require("../../db");

const createDeposito = async (req, res, next) => {
  try {
    const { nombre, calle, altura, ciudad, provincia, pais, descripcion } =
      req.body;
    if (typeof nombre !== "string" || nombre === undefined) {
      throw new Error(
        `El Nombre del deposito debe ser unicamente texto, y has insertado ${
          nombre === undefined ? "texto vacio" : nombre
        }`
      );
    }
    if (typeof calle !== "string" || calle === undefined) {
      throw new Error(
        `La calle de la categoria debe ser unicamente texto, y has insertado ${
          calle === undefined ? "texto vacio" : calle
        }`
      );
    }
    if (typeof pais !== "string" || pais === undefined) {
      throw new Error(
        `El pais de la categoria debe ser unicamente texto, y has insertado ${
          pais === undefined ? "texto vacio" : pais
        }`
      );
    }

    if (
      typeof nombre === "string" &&
      typeof calle === "string" &&
      typeof altura === "string" &&
      typeof ciudad === "string" &&
      typeof provincia === "string" &&
      typeof pais === "string" &&
      typeof descripcion === "string"
    ) {
      const newDeposito = await Deposito.create({
        nombre,
        calle,
        altura,
        ciudad,
        provincia,
        pais,
        descripcion,
      });
      req.body.resultado = {
        status: "200",
        respuesta: `el deposito ${nombre} se ah creado exitosamente!`,
      };
      next();
    } else {
      throw new Error("datos pasados por body son incorrectos");
    }
  } catch (err) {
    req.body.resultado = { status: "404", respuesta: err.message };

    next();
  }
};
module.exports = createDeposito;
