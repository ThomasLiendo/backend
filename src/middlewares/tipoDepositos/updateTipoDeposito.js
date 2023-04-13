const { TipoDeposito } = require("../../db");

const updateTipoDeposito = async (req, res, next) => {
  try {
    const { nombre, calle, altura, ciudad, provincia, pais } = req.body;
    const id = req.params.id;
    const tipoDeposito = await TipoDeposito.findAll({ where: { id } });
    if (tipoDeposito.lenght !== 0) {
      await TipoDeposito.update(
        {
          nombre: nombre || tipoDeposito.nombre,
          calle: calle || tipoDeposito.calle,
          altura: altura || tipoDeposito.altura,
          ciudad: ciudad || tipoDeposito.ciudad,
          provincia: provincia || tipoDeposito.provincia,
          pais: pais || tipoDeposito.pais,
        },
        { where: { id: id } }
      );
      req.body.resultado = {
        status: "200",
        respuesta: `el Tipo de Deposito ${nombre} se ah actualizado exitosamente`,
      };
      next();
    } else {
      throw new Error(`El Tipo de Deposito con el ID: ${id} no se ah encontrado`);
    }
  } catch (err) {
    req.body.resultado = { status: 404, resultado: err.message };
    next();
  }
};

module.exports = updateTipoDeposito;
