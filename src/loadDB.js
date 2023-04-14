const roles = require("./json/roles.json");
const tipoDepositos = require("./json/tipoDeposito.json");
const depositos = require("./json/depositos.json");
const empresas = require("./json/empresas.json");
const categoria = require("./json/categorias.json");
const subcategoria = require("./json/subcategorias.json");
const producto = require("./json/productos.json");
const {
  Rol,
  TipoDeposito,
  Empresa,
  Usuario,
  Deposito,
  Categoria,
  Subcategoria,
  Producto,
} = require("./db.js");

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

async function fnEmpresas() {
  for (const e of empresas) {
    const empresa = await Empresa.create(e);
    fnUsuarios(empresa);
    //fnDepositos(empresa);
    fnProducto(empresa);
  }
}

async function fnUsuarios(empresa) {
  const newAdmin = await Usuario.create({
    email: empresa.email,
    nombre: empresa.nombre,
    apellido: "Administrador",
    clave: empresa.nombre + this.apellido,
  });
  await empresa.addUsuario(newAdmin);
}

async function fnDepositos(empresa) {
  for (const d of depositos) {
    const deposito = await Deposito.create(d);
    await empresa.addDeposito(deposito);
  }
}

async function fnProducto(empresa) {
  for (const p of producto) {
    const [producto, created] = await Producto.findOrCreate({
      where: { nombre: p.nombre },
      defaults: p,
    });
    await empresa.addProducto(producto);
  }
}

async function fnCategorias() {
  for (const cat of categoria) {
    const categoria = await Categoria.create(cat);
    fnSubcategoria(categoria);
  }
}

async function fnSubcategoria(categoria) {
  for (const sub of subcategoria) {
    const [subcategoria, created] = await Subcategoria.findOrCreate({where:{nombre:sub.nombre},defaults:sub});
    await categoria.addSubcategoria(subcategoria)
  }
}


module.exports = {
  fnRols,
  fnTipoDepositos,
  fnEmpresas,
  fnDepositos,
  fnCategorias,
  
};
