const { Empresa, Op } = require("../../db");

const updateEmpresa = async (req, res, next) => {
  try {
    let { nombre, descripcion, email, clave } = req.body;
    const id = req.params.id;
    const idEmpresa = await Empresa.findAll({ where: { id } });
    if (idEmpresa.lenght !== 0) {
      await Empresa.update(
        {
          nombre: nombre || idEmpresa.nombre,
          descripcion: descripcion || idEmpresa.descripcion,
          email: email || idEmpresa.email,
          clave: clave || idEmpresa.clave,
        },
        { where: { id: id } }
      );
      req.body.resultado = {
        status: "200",
        respuesta: `El Empresa ${nombre} se ah actualizado exitosamente`,
      };
      next();
    } else {
      throw new Error(`Empresa con el ${id} no se ah encontrado`);
    }
  } catch (err) {
    console.log("error en updateUser");
    console.log(err);
    res.status(412).json({ resultado: err });
  }
};

module.exports = updateEmpresa;
