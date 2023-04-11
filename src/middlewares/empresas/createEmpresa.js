const { Empresa, Usuario, Rol, Op } = require("../../db");

const createEmpresa = async (req, res, next) => {
  try {
    const { nombre, descripcion, email, clave } = req.body;
    if (typeof nombre !== "string" || nombre === undefined) {
      throw new Error(
        `El Nombre del Producto debe ser unicamente texto, y has insertado ${
          nombre === undefined ? "texto vacio" : nombre
        }`
      );
    }

    const elRol = await Rol.findByPk(1);
    const newEmpresa = await Empresa.create({
      nombre,
      descripcion,
      email,
    });
    const newAdmin = await Usuario.create({
      email,
      nombre,
      apellido:"Administrador",
      clave: nombre + this.apellido,
      rolID: 1,
      empresaID: newEmpresa.id,
    });

    await newAdmin.addRols(elRol);
    await newEmpresa.addUsuario(newAdmin);

    req.body.resultado = {
      status: "200",
      respuesta: `La Empresa ${nombre} se ah creado exitosamente`,
    };
    next();
  } catch (err) {
    console.log("error en createEmpresa");
    console.log(err.message);
    req.body.resultado = { status: "404", respuesta: err.message };
    next();
  }
};

module.exports = createEmpresa;
