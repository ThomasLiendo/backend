const { Subcategoria } = require("../../db");

const deleteSubcategoria = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subcateogoria = await Subcategoria.findOne({ where: { id } });
    if (subcateogoria.id > 0) {
      await subcateogoria.destroy({ where: { id: subcateogoria.id } });
      req.body.eliminado = subcateogoria.id;
      next();
    } else {
      throw new Error(`no existe la subcateogoria con esa ID: ${id}`);
    }
  } catch (error) {
    res.status(404).send(`subcateogoria no encontrada`);
  }
};

module.exports = deleteSubcategoria;
