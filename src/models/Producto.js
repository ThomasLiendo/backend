const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Producto", {
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
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "codigoSubcategoria"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    imagen: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true,
      },
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/2048px-Imagen_no_disponible.svg.png"
    },
  });
};
