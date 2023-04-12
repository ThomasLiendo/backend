const { Categoria, Subcategoria } = require("../../db");

const allSubCategory = async (req, res, next) => {
  try {
    req.body.allSubCategories = {status: 200, resultado: await Subcategoria.findAll({include:Categoria})};
    next();
  } catch (error) {
    req.body.allSubCategories = {status:404, resultado:[]}
  }
};

module.exports = allSubCategory;
