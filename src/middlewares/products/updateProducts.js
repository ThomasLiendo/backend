const { Producto, Subcategoria, Deposito, Op } = require("../../db");

const updateProduct = async (req, res, next) => {
  try {
    const {
      nombre,
      cantidad,
      descripcion,
      codigo,
      subcategoriaID,
      depositoID,
    } = req.body;
    const id = req.params.id;
    const producto = await Producto.findByPk(id);
    if (producto.lenght !== 0) {
      await Producto.update(
        {
          nombre: nombre || producto.nombre,
          cantidad: cantidad || producto.cantidad,
          descripcion: descripcion || producto.descripcion,
          codigo: codigo || producto.codigo,
          subcategoriaID: subcategoriaID || producto.subcategoriaID,
          depositoID: depositoID || producto.depositoID,
        },
        { where: { id: id } }
      );
      if (subcategoriaID) {
        await producto.setSubcategorium(
          await Subcategoria.findByPk(subcategoriaID)
        );
      }
      if (depositoID) {
        await producto.setDeposito(await Deposito.findByPk(depositoID));
      }
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
