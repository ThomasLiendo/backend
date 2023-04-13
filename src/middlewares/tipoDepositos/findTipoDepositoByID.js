const { TipoDeposito } = require("../../db");

const findTipoDepositoByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    req.body.findTipoDepositoByID = {
      status: 200,
      resultado: await TipoDeposito.findByPk(id),
    };

    next();
  } catch (err) {
    req.body.findTipoDepositoByID = { status: 404, resultado: err.message };
  }
};

module.exports = findTipoDepositoByID;
