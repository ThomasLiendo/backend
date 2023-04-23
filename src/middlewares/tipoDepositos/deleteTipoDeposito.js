const { TipoDeposito } = require("../../db");

const deleteTipoDeposito = async (req, res, next) => {
  try {
    const id = req.params.id;
    const tipoDeposito = await TipoDeposito.findOne({ where: { id } });

    if (!tipoDeposito) {
      throw new Error(`No existe el Tipo de Deposito con el ID: ${id}`);
    }
    if (tipoDeposito.id > 0) {
      await TipoDeposito.destroy({ where: { id: tipoDeposito.id } });
      req.body.eliminado = {
        status: 200,
        resultado: `el Tipo de Deposito ${tipoDeposito.nombre} ah sido eliminado`,
      };
      next();
    } else {
      throw new Error(`no existe el Tipo de Deposito con ese ID: ${id}`);
    }
  } catch (err) {
    console.log("error en deleteTipoDeposito");
    console.log(err);
    req.body.eliminado = { status: 404, resultado: err.message };
  }
};

module.exports = deleteTipoDeposito;
