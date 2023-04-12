const { Categoria,Subcategoria } = require("../../db");

const allCategory = async (req, res, next) => {
  try {
    req.body.allCategories = await Categoria.findAll({
      attributes: ["id", "nombre", "descripcion"],
      include: [
        {
          model: Subcategoria,
          attributes: ["id", "nombre","descripcion"],
          through: {
            attributes: []
          }
        }
      ],
    });
    next();
  } catch (error) {
    res.status(404).json("Error no se encontro allCatgory");
  }
};

module.exports = allCategory;
