const { Categoria, Subcategoria } = require("../../db");

const createSubCategory = async (req, res, next) => {
  try {
    const { nombre, descripcion, categoriaID } = req.body;
    const categoryById = await Categoria.findByPk(categoriaID);
    if (typeof nombre !== "string" || nombre === undefined) {
      throw new Error(
        `El Nombre de la categoria debe ser unicamente texto, y has insertado ${
          nombre === undefined ? "texto vacio" : nombre
        }`
      );
    }
    if (typeof descripcion !== "string" || descripcion === undefined) {
      throw new Error(
        `La descripcion de la categoria debe ser unicamente texto, y has insertado ${
          descripcion === undefined ? "texto vacio" : descripcion
        }`
      );
    }

    if (typeof nombre === "string" && typeof descripcion === "string") {
      const newSubCategory = await Subcategoria.create({
        nombre,
        descripcion,
      });
      console.log(categoryById)
      await newSubCategory.addCategoria(categoryById);
      req.body.resultado = {
        status: "200",
        respuesta: `La categoria ${nombre} con la descripcion: ${descripcion} se ha creado exitosamente!`,
      };
      next();
    } else {
      throw new Error("datos pasados por body son incorrectos");
    }
  } catch (err) {
    req.body.resultado = { status: "404", respuesta: err };
    console.log(req.body.resultado);
    next();
  }
};

module.exports = createSubCategory;
