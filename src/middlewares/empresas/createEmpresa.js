const { Empresa, Usuario, Rol, Op } = require("../../db");
const TipoSuscripcion = require("../../models/TipoSuscripcion");
const functionHash = require("../../functions/hash");

const createEmpresa = async (req, res, next) => {
  try {
    const { nombre, descripcion, email, clave, tipoSuscripcionID } = req.body;

    console.log(nombre === undefined);
    if (typeof nombre !== "string" || nombre === undefined) {
      throw new Error(
        `El Nombre del Producto debe ser unicamente texto, y has insertado ${
          nombre === undefined ? "texto vacio" : nombre
        }`
      );
    }

    console.log(
      "Pendiente x Corregir Crear empresa error de llave de duplicidad"
    );

    const find = await Empresa.findAll();

    const newEmpresa = await Empresa.create({
      id: find.length + 1,
      nombre,
      descripcion,
      email,
    });
    console.log("-------");
    const newAdmin = await Usuario.create({
      email,
      nombre,
      apellido: "Administrador",
      clave: functionHash(clave),
    });
    const tipoSuscripcion = await TipoSuscripcion.findByPk(tipoSuscripcionID);
    await newEmpresa.addTipoSuscripcion(tipoSuscripcion);

    const elRol = await Rol.findByPk(2);
    await newAdmin.setRol(elRol);

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
