const { Empresa, Op } = require("../../db");

const updateEmpresa = async (req, res, next) => {
  try {
    let { nombre, descripcion, email, clave, bloqueo } = req.body;
    const id = req.params.id;
    const idEmpresa = await Empresa.findAll({ where: { id:id } });
    console.log("id: ",id)
    console.log("el bloqueo inicial estaba en: ",bloqueo)
    console.log(idEmpresa)
    if (idEmpresa.lenght !== 0) {
      await Empresa.update(
        {
          nombre: nombre || idEmpresa.nombre,
          descripcion: descripcion || idEmpresa.descripcion,
          email: email || idEmpresa.email,
          clave: clave || idEmpresa.clave,
          bloqueo: bloqueo || idEmpresa.bloqueo,
        },
        { where: { id: id } }
      );
      console.log("nombre de la empresa: ", idEmpresa[0].nombre)
      console.log("editado a: ", idEmpresa[0].bloqueo)
      req.body.resultado = {
        status: "200",
        respuesta: `El Empresa ${idEmpresa[0].nombre} se ah actualizado exitosamente`,
      };
      next();
    } else {
      throw new Error(`Empresa con el ${id} no se ah encontrado`);
    }
  } catch (err) {
    console.log("error en updateEmpresa");
    console.log(err);
    res.status(412).json({ resultado: err });
  }
};

module.exports = updateEmpresa;
