const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Usuario", {
    //id se crea automatico
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: {
          msg: "El Nombre debe ser solo Texto",
        },
      },
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "El Apellido debe ser solo Texto",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "El Formato del Email no es el correcto",
        },
      },
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 20],
        isInt: {
          msg: "La Clave debe ser entre 5 a 20 caracteres",
        },
      },
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
