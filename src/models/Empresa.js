const { DataTypes } = require("sequelize");
const hash = require("../functions/hash");
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
    bloqueo: {
      type: DataTypes.BOOLEAN,
      //allowNull: false,
      defaultValue: false, //El default es por si no le pasan algo por body, setea ese valor por defecto
    },
    verificado: {
      type: DataTypes.BOOLEAN,
      //allowNull: false,
      defaultValue: true,
    },
    suscripcionTipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    suscripcionTiempo: {
      type: DataTypes.BOOLEAN,
      allowNull: true, //cambiarlo a false
      defaultValue: true, 
    },
    suscripcionFecha: {
      type:DataTypes.DATE,
      allowNull:true,
      defaultValue: DataTypes.NOW
    },
    imagen: {
      type: DataTypes.TEXT, //puse .text para que cuando se ponga una imagen me permita mas caracteres para poner un link largo
      allowNull: true,
      defaultValue: "https://cdn-icons-png.flaticon.com/512/3442/3442560.png",
    },
  });
};
