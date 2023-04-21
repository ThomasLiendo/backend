const { Producto, Categoria, Subcategoria, Deposito, Empresa, Op } = require("../../db");

const createProduct = async (req, res, next) => {
  try {
    const { nombre, descripcion, codigo, cantidad, imagen, subcategoriaID, depositoID } = req.body;
    if (typeof nombre !== "string" || nombre === undefined) {
      throw new Error(
        `El Nombre del Producto debe ser unicamente texto, y has insertado ${
          nombre === undefined ? "texto vacio" : nombre
        }`
      );
    }
    const deposito = await Deposito.findByPk(depositoID);
    const empresaID = deposito.EmpresaId;
    const empresa = await Empresa.findByPk(empresaID)
    const subcategoria = await Subcategoria.findByPk(subcategoriaID);
    const newProduct = await Producto.create({
      nombre,
      descripcion,
      codigo,
      cantidad,
      imagen,
    });
    await subcategoria.addProducto(newProduct);
    await deposito.addProducto(newProduct);
    // await empresa.addProducto(newProduct);
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
