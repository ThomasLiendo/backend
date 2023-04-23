const { Categoria, Subcategoria } = require("../../db");

const allSubCategory = async (req, res, next) => {
  try {
    req.body.allSubCategories = {status: 200, resultado: await Subcategoria.findAll({
      order: [["id", "ASC"]],
      attributes:["id","nombre","descripcion"],
      include:{
        model: Categoria,
            attributes: ["id", "nombre", "descripcion"],
            through: {
              attributes: [],
            },
      }
    })};      
    next();
  } catch (error) {
    req.body.allSubCategories = {status:404, resultado:[]}
  }
};

module.exports = allSubCategory;
