const { Deposito, TipoDeposito } = require("../../db");

const createTipoDeposito = async (req, res, next) => {
  try {
    const {
      tipo,
      depositoId,
    } = req.body;

    if ( typeof tipo === "string" ) {
      const newTipoDeposito = await TipoDeposito.create({
        tipo,
      });
      const deposito = await Deposito.findByPk(depositoId);
      await newTipoDeposito.addDeposito(deposito)
      req.body.resultado = {
        status: "200",
        respuesta: `el Tipo de Deposito ${nombre} se ah creado exitosamente!`,
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
module.exports = createTipoDeposito;
