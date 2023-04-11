const { DataTypes } = require("sequelize");
const hash = require('../functions/hash');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Empresa", {
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
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
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
    // clave: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: {
    //       args: [5, 20],
    //       msg: "La Clave debe ser entre 5 a 20 caracteres",
    //     },
    //   },
    //   set(value){
    //     this.setDataValue('clave', hash(value));
    //   }
    // },
  });
};
