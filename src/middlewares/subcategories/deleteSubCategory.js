const { Subcategoria } = require("../../db");

const deleteSubCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subcategoria = await Subcategoria.findOne({ where: { id } });
    if (subcategoria.id > 0) {
      await Subcategoria.destroy({ where: { id: subcategoria.id } });
      req.body.eliminado = subcategoria.id;
      next();
    } else {
      throw new Error(`no existe la Subcategoria con esa ID: ${id}`);
    }
  } catch (error) {
    res.status(404).send(`Subcategoria no encontrada`);
  }
};

module.exports = deleteSubCategory;
