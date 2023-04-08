const roles = require("./json/roles.json");
const { Rol } = require("./db.js");

async function fnRols() {
  for (const r of roles) {
    await Rol.create(r);
  }
}


module.exports=fnRols;
