const roles = require("./json/roles.json");
const tipoDepositos = require("./json/tipoDeposito.json")
const { Rol, TipoDeposito } = require("./db.js");

async function fnRols() {
  for (const r of roles) {
    await Rol.create(r);
  }
}

async function fnTipoDepositos(){
  for (const t of tipoDepositos){
    await TipoDeposito.create(t)
  }
}


module.exports={fnRols, fnTipoDepositos};
