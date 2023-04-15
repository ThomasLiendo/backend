const { Deposito, TipoDeposito } = require("../../db");

const updateDeposito = async (req, res, next) => {
  try {
    const { nombre, calle, altura, ciudad, provincia, pais, tipoDepositoID } = req.body;
    const id = req.params.id;
    const deposito = await Deposito.findAll({ where: { id } });
    if (deposito.lenght !== 0) {
      const depositoActualizado = await Deposito.update(
        {
          nombre: nombre || deposito.nombre,
          calle: calle || deposito.calle,
          altura: altura || deposito.altura,
          ciudad: ciudad || deposito.ciudad,
          provincia: provincia || deposito.provincia,
          pais: pais || deposito.pais,
        },
        { where: { id: id } }
      );
      if(tipoDepositoID){
        const nuevoTipoDeposito = await TipoDeposito.findByPk(tipoDepositoID)
        await depositoActualizado.setTipoDeposito(nuevoTipoDeposito);
      }
      req.body.resultado = {
        status: "200",
        respuesta: `el deposito ${nombre} se ah actualizado exitosamente`,
      };
      next();
    } else {
      throw new Error(`El deposito con el ID: ${id} no se ah encontrado`);
    }
  } catch (err) {
    req.body.resultado = { status: 404, resultado: err.message };
    next();
  }
};

module.exports = updateDeposito;
