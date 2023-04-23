const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Presupuesto", {
    //id se crea automatico
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    // numeroDePresupuesto: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   unique: true,
    // },
    fecha: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cuit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    materiales: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //hay q poner la cantidad de cada material que se usa. Ejemplo: si se llevan 20 bolsas de cemento, 10 bolsas de arena, 60 bolsas de piedra, hay q hacer para q se sepa las cantidades de cada material q se va a poner en el presupuesto para desp capaz tener controlado el stock
    nota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
