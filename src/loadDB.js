const roles = require("./json/roles.json");
const tipoDepositos = require("./json/tipoDeposito.json");
const empresas = require("./json/empresas.json");
const {
  Rol,
  TipoDeposito,
  TipoSuscripcion,
  Empresa,
  Usuario,
} = require("./db.js");
const tipoSuscripcion = require("./json/tipoSuscripcion.json");

async function fnRols() {
  for (const r of roles) {
    await Rol.create(r);
  }
}

async function fnTipoDepositos() {
  for (const t of tipoDepositos) {
    await TipoDeposito.create(t);
  }
}
async function fnTipoSuscripcion() {
  for (const r of tipoSuscripcion) {
    await TipoSuscripcion.create(r);
  }
}

async function fnEmpresas() {
  for (const e of empresas) {
    await Empresa.create(e);
  }
  const todasLasEmpresas = await Empresa.findAll();
  todasLasEmpresas.forEach(async (e) => {
    console.log("CORREO", e.email);
    const newAdmin = await Usuario.create({
      email: e.email,
      nombre: e.nombre,
      apellido: "Administrador",
      clave: e.nombre + this.apellido,
    });
    await e.addUsuario(newAdmin);
  });
}

module.exports = { fnRols, fnTipoDepositos, fnEmpresas, fnTipoSuscripcion };
