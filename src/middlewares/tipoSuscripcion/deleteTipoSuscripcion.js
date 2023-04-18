const { TipoSuscripcion } = require("../../db");

const deleteTipoSuscripcion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tipoSuscripcion = await TipoSuscripcion.findOne({ where: { id } });

    if (!tipoSuscripcion) {
      throw new Error(`No existe el Tipo de Deposito con el ID: ${id}`);
    }
    if (tipoSuscripcion.id > 0) {
      await TipoSuscripcion.destroy({ where: { id: tipoSuscripcion.id } });
      req.body.eliminado = {
        status: 200,
        resultado: `el Tipo de Suscripcion ${tipoSuscripcion.nombre} ah sido eliminado`,
      };
      next();
    } else {
      throw new Error(`no existe el Tipo de Suscripcion con ese ID: ${id}`);
    }
  } catch (err) {
    console.log("error en deleteTipoSuscripcion");
    console.log(err);
    req.body.eliminado = { status: 404, resultado: err.message };
  }
};

module.exports = deleteTipoSuscripcion;
