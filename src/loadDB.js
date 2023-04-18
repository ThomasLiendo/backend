const roles = require("./json/roles.json");
const tipoDepositos = require("./json/tipoDeposito.json");
const depositos = require("./json/depositos.json");
const empresas = require("./json/empresas.json");
const categoria = require("./json/categorias.json");
const subcategoria = require("./json/subcategorias.json");
const producto = require("./json/productos.json");
const tipoSuscripcion = require("./json/tipoSuscripcion.json");
const {
  Rol,
  TipoDeposito,
  Empresa,
  Usuario,
  Deposito,
  Categoria,
  Subcategoria,
  Producto,
  TipoSuscripcion,
} = require("./db.js");

function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

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
    await TipoSuscripcion.create({
      tipo: r.tipo,
    });
  }
}

async function fnEmpresas() {
  for (const e of empresas) {
    const empresa = await Empresa.create(e);
    fnUsuarios(empresa);
    fnProducto(empresa);
  }
}

async function fnUsuarios(empresa) {
  const adminRol = await Rol.findByPk(2);
  const newAdmin = await Usuario.create({
    email: empresa.email,
    nombre: empresa.nombre,
    apellido: "Administrador",
    clave: empresa.nombre + this.apellido,
  });

  await empresa.addUsuario(newAdmin);
  await newAdmin.setRol(adminRol);
}

async function fnDepositos() {
  const tiposDepos = await TipoDeposito.findAll();
  for (const d of depositos) {
    const [deposito, created] = await Deposito.findOrCreate({
      where: { nombre: d.nombre },
      defaults: {
        nombre: d.nombre,
        calle: d.calle,
        altura: d.altura,
        ciudad: d.ciudad,
        provincia: d.provincia,
        ciudad: d.ciudad,
        pais: d.pais,
        descripcion: d.descripcion,
        observaciones: d.observaciones,
      },
    });
    const random = getRandom(0, tiposDepos.length - 1);
    await deposito.setTipoDeposito(tiposDepos[random]);
  }
}

async function fnProducto(empresa) {
  for (const p of producto) {
    const [producto, created] = await Producto.findOrCreate({
      where: { nombre: p.nombre },
      defaults: {
        nombre: p.nombre,
        descripcion: p.descripcion,
        codigo: p.codigo,
      },
    });
    await empresa.addProducto(producto);
  }
}

async function fnCategorias() {
  for (const cat of categoria) {
    await Categoria.create(cat);
  }
}

async function fnSubcategoria() {
  for (const sub of subcategoria) {
    await Subcategoria.create(sub);
  }
}

async function fnRelProdSubCat() {
  const categorias = await Categoria.findAll();
  const subcategorias = await Subcategoria.findAll();
  const productos = await Producto.findAll();

  categorias.forEach(async (cat) => {
    subcategorias.forEach(async (sub) => {
      await cat.addSubcategoria(sub);
    });
  });

  subcategorias.forEach(async (sub) => {
    productos.forEach(async (prod) => {
      await sub.addProducto(prod);
    });
  });

  const empresas = await Empresa.findAll();

  // empresas.forEach(async (emp)=>{
  //   await emp.addDepositos(depositos)
  // })

  empresas.forEach(async (emp) => {
    for (const dep of depositos) {
      if (emp.id === dep.empresaID) {
        const deposit = await Deposito.findOne({
          where: { nombre: dep.nombre },
        });
        await emp.addDeposito(deposit);
      }
    }
  });
}

module.exports = {
  fnRols,
  fnTipoDepositos,
  fnEmpresas,
  fnDepositos,
  fnCategorias,
  fnSubcategoria,
  fnRelProdSubCat,
  fnTipoSuscripcion,
};
