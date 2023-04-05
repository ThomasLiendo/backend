const { Usuario, Empresa, Op } = require("../../db");

const allUser = async (req, res, next) => {
  try {
    const allUsers = await Usuario.findAll({
        include: [Empresa],
      });
          req.body.allUsers = {status:200, resultado: allUsers}
    next();
  } catch (err) {
    console.log("error en allUser", err.message);
    req.body.allUsers = {status:404,resultado: err.message}
  }
};

module.exports = allUser;
