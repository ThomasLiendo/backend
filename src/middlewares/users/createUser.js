const { Usuario, Rol, Op } = require("../../db");

const createUser = async (req, res, next) => {
  try {
    const { nombre, apellido, email, clave } = req.body;
    const { rol } = req.body;
    const elRol = await Rol.findAll({
      where: { rol: rol },
    });

    if (typeof nombre !== "string" || nombre === undefined) {
      throw new Error(
        `El Nombre del Usuario debe ser unicamente texto, y has insertado ${
          nombre === undefined ? "texto vacio" : nombre
        }`
      );
    }
    if (typeof apellido !== "string" || apellido === undefined) {
      throw new Error(
        `El Apellido del Usuario debe ser unicamente texto, y has insertado ${
          apellido === undefined ? "texto vacio" : apellido
        }`
      );
    }
    if (
      typeof nombre === "string" &&
      typeof apellido === "string" &&
      typeof email === "string" &&
      typeof clave === "string"
    ) {
      const newUser = await Usuario.create({
        nombre,
        apellido,
        email,
        clave,
        rol,
      });
      await newUser.addRol(elRol);
      // res.status(200).json(elRol);
      req.body.resultado = {
        status: "200",
        respuesta: `el Usuario ${nombre} ${apellido} con email: ${email} y con el rol ${rol} se ah creado exitosamente!`,
      };
      next();
    } else {
      throw new Error("datos pasados por body son incorrectos");
    }
  } catch (err) {
    req.body.resultado = { status: "404", respuesta: err.message };

    next();
  }
};

module.exports = createUser;
