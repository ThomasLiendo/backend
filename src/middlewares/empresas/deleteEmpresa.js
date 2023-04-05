const { Empresa, Op } = require("../../db");

const deleteEmpresa = async (req, res, next) => {
  try {
    const id = req.params.id;
    const empresa = await Empresa.findOne({ where: { id } });
    if (!empresa) {
      throw new Error(`No existe la Empresa con el ID: ${id}`);
    }
    if (empresa.id > 0) {
      await Empresa.destroy({ where: { id: empresa.id } });
      req.body.eliminado = {
        status: 200,
        resultado: `La Empresa ${empresa.nombre} ah sido eliminado`,
      };
      next();
    } else {
      throw new Error(`no existe la Empresa 1con esa ID: ${id}`);
    }
  } catch (err) {
    console.log("error en deleteEmpresa");
    console.log(err.message);
    req.body.eliminado = { status: 200, resultado: err.message };
    next();
  }
};

module.exports = deleteEmpresa;
