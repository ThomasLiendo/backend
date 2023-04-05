const { Deposito } = require("../../db");

const findDepositoByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    req.body.findDepositoByID = {
      status: 200,
      resultado: await Deposito.findByPk(id),
    };

    next();
  } catch (err) {
    req.body.findDepositoByID = { status: 404, resultado: err.message };
  }
};

module.exports = findDepositoByID;
