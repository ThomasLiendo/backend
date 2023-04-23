const { Empresa } = require("../../db");

const findEmpresaByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    req.body.findEmpresaByID = {
      status: 200,
      resultado: await Empresa.findByPk(id),
    };
    next();
  } catch (err) {
    req.body.findEmpresaByID = { status: 404, resultado: err.message };
  }
};

module.exports = findEmpresaByID;
