require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

/*const sequelize = new Sequelize(
  postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/eaglesolutions,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
*/

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  Categoria,
  Subcategoria,
  Producto,
  Rol,
  Usuario,
  Deposito,
  Empresa,
  TipoDeposito,
  TipoSuscripcion,
  Factura,
  OrdenDeCompra,
  Presupuesto,
  Remito,
} = sequelize.models; // añadir modelos

// Aca vendrian las relaciones

Empresa.hasMany(Usuario);
Usuario.belongsTo(Empresa);

Empresa.hasMany(Deposito);
Deposito.belongsTo(Empresa);

Deposito.hasMany(Producto);
Producto.belongsTo(Deposito);

TipoDeposito.hasMany(Deposito);
Deposito.belongsTo(TipoDeposito);

TipoSuscripcion.hasOne(Empresa);
Empresa.belongsTo(TipoSuscripcion);

Subcategoria.hasMany(Producto);
Producto.belongsTo(Subcategoria);

Categoria.belongsToMany(Subcategoria, { through: "Categoria_Subcategoria" });
Subcategoria.belongsToMany(Categoria, { through: "Categoria_Subcategoria" });

Rol.hasMany(Usuario);
Usuario.belongsTo(Rol);

Categoria.belongsToMany(Producto, { through: "Categoria_Producto" });
Producto.belongsToMany(Categoria, { through: "Categoria_Producto" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
  Op,
};
