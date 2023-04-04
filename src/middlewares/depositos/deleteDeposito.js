const { Deposito } = require("../../db");

const deleteDeposito = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deposito = await Deposito.findOne({ where: { id } });

    if (!deposito) {
      throw new Error(`No existe el deposito con el ID: ${id}`);
    }
    if (deposito.id > 0) {
      await Deposito.destroy({ where: { id: deposito.id } });
      req.body.eliminado = {
        status: 200,
        resultado: `el deposito ${deposito.nombre} ah sido eliminado`,
      };
      next();
    } else {
      throw new Error(`no existe el deposito con ese ID: ${id}`);
    }
  } catch (err) {
    console.log("error en deleteDeposito");
    console.log(err);
    req.body.eliminado = { status: 404, resultado: err.message };
  }
};

module.exports = deleteDeposito;
