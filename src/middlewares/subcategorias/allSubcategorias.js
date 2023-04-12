const { Subcategoria } = require("../../db");

const allSubcategorias = async (req, res, next) => {
  try {
    req.body.allSubcategories = await Subcategoria.findAll();
    next();
  } catch (error) {
    res.status(404).json("Error no se encontraron todas las subcategorias");
  }
};

module.exports = allSubcategorias;
