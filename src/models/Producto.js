const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Producto', {
    //id se crea automatico
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    nombre: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cantidad: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    observaciones: { //cambiarlo a un array de observaciones
      type: DataTypes.STRING,
      allowNull: true,
    },
  },);
};
