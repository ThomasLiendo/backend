const { Producto, Op } = require("../../db");

const updateProduct = async (req, res, next) => {
  try {
    const { nombre, cantidad, observaciones, informacion } = req.body;
    const id = req.params.id;
    const producto = await Producto.findAll({ where: { id } });
    if (producto.lenght !== 0) {
      await Producto.update(
        {
          nombre,
          cantidad,
          observaciones,
          informacion,
        },
        { where: { id: id } }
      );
      req.body.resultado = {
        status: "200",
        respuesta: `El producto ${nombre} se ah actualizado exitosamente`,
      };
      next();
    } else {
      throw new Error(`producto con el ${id} no se ah encontrado`);
    }
  } catch (err) {
    console.log("error en updateProduct");
    console.log(err);
    res.status(412).json({ resultado: err });
  }
};

module.exports = updateProduct;
