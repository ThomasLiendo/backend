const { Producto, Op } = require("../../db");

const createProduct = async (req, res, next) => {
  try {
    const { nombre, descripcion, codigo } = req.body;
    console.log(nombre);
    if (typeof nombre !== "string" || nombre === undefined) {
      throw new Error(
        `El Nombre del Producto debe ser unicamente texto, y has insertado ${
          nombre === undefined ? "texto vacio" : nombre
        }`
      );
    }
    const newProduct = await Producto.create({
      nombre,
      descripcion,
      codigo,
    });
    req.body.resultado = {
      status: "200",
      respuesta: `el Producto ${nombre} se ah creado exitosamente`,
    };
    next();
  } catch (err) {
    console.log("error en createProduct");
    console.log(err.message);
    req.body.resultado = { status: "404", respuesta: err.message };
    console.log(req.body.resultado);
    next();
  }
};

module.exports = createProduct;
