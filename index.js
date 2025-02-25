const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  fnRols,
  fnTipoDepositos,
  fnEmpresas,
  fnCategorias,
  fnRelProdSubCat,
  fnDepositos,
  fnSubcategoria,
  fnTipoSuscripcion,
  fnProducto,
} = require("./src/loadDB.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(3001, async () => {
    await fnRols();
    await fnTipoDepositos();
    await fnTipoSuscripcion();
    await fnEmpresas();
    await fnDepositos();
    await fnCategorias();
    await fnSubcategoria();
    await fnRelProdSubCat();
    await fnProducto();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
