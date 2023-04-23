const { Categoria,Subcategoria } = require("../../db");

const allCategory = async (req, res, next) => {
  try {
    const {empresaId} = req.query;
    if(empresaId){
      req.body.allCategories = await Categoria.findAll({
        where:{EmpresaId:empresaId},
        attributes: ["id", "nombre", "descripcion"],
        order: [["nombre","ASC"]],
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
    }else{
      req.body.allCategories = await Categoria.findAll({
        attributes: ["id", "nombre", "descripcion"],
        order: [["nombre","ASC"]],
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
    }
  } catch (error) {
    res.status(404).json("Error no se encontro allCatgory");
  }
};

module.exports = allCategory;
