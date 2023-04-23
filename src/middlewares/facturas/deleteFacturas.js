const { Factura } = require("../../db");

const deleteFacturas = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Factura = await Factura.findOne({ where: { id } });

    if (!Factura) {
      throw new Error(`No existe la factura con el ID: ${id}`);
    }
    if (Factura.id > 0) {
      await Factura.destroy({ where: { id: Factura.id } });
      req.body.eliminado = {
        status: 200,
        resultado: `el Tipo de Suscripcion ${Factura.nombre} ah sido eliminado`,
      };
      next();
    } else {
      throw new Error(`no existe el Tipo de Suscripcion con ese ID: ${id}`);
    }
  } catch (err) {
    console.log("error en deleteFactura");
    console.log(err);
    req.body.eliminado = { status: 404, resultado: err.message };
  }
};

module.exports = deleteFacturas;
