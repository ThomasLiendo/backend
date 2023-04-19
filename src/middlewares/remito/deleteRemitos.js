const { Remito } = require("../../db");

const deleteRemitos = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Remito = await Remito.findOne({ where: { id } });

    if (!Remito) {
      throw new Error(`No existe la Remito con el ID: ${id}`);
    }
    if (Remito.id > 0) {
      await Remito.destroy({ where: { id: Remito.id } });
      req.body.eliminado = {
        status: 200,
        resultado: `el remito ${Remito.nombre} ah sido eliminado`,
      };
      next();
    } else {
      throw new Error(`no existe el remito con ese ID: ${id}`);
    }
  } catch (err) {
    console.log("error en deleteRemito");
    console.log(err);
    req.body.eliminado = { status: 404, resultado: err.message };
  }
};

module.exports = deleteRemitos;
