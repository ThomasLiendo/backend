const { Categoria } = require("../../db");

const allCategory = async (req, res, next) => {
  try {
    req.body.allCategories = await Categoria.findAll();
    next();
  } catch (error) {
    res.status(404).json("Error no se encontro allCatgory");
  }
};

module.exports = allCategory;
