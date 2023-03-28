const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    //id se crea automatico
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: { //Name *
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    quantity: { // Cantidad *
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detail: { // Detalle *
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: { // Años de Vida
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: { // Imagen
      type: DataTypes.TEXT,
      allowNull: true,
    },
    available: { // Disponibilidad
        type: DataTypes.TEXT,
        allowNull: true,
      }
  },);
};
