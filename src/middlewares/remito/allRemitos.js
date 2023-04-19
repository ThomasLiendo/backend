const { Remito } = require("../../db");

const allRemitos = async (req, res, next) => {
  try {
    req.body.allRemitos = await Remito.findAll();
    next();
  } catch (err) {
    console.log("error en allRemitos");
    res.status(404);
  }
};

module.exports = allRemitos;
