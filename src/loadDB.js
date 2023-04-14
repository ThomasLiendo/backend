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

async function fnDepositos() {
  for (const d of depositos) {
    const [deposito, created] = await Deposito.findOrCreate({where:{nombre:d.nombre},defaults:{
      nombre:d.nombre,
      calle:d.calle,
      altura:d.altura,
      ciudad:d.ciudad,
      provincia:d.provincia,
      ciudad:d.ciudad,
      pais:d.pais,
      descripcion:d.descripcion,
      observaciones:d.observaciones
    }});
  }
}

async function fnProducto(empresa) {
  for (const p of producto) {
    const [producto, created] = await Producto.findOrCreate({
      where: { nombre: p.nombre },
      defaults: {
        id: p.id,
        nombre: p.nombre,
        descripcion: p.descripcion,
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
  const depositos = await Deposito.findAll();
  const empresas = await Empresa.findAll();

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

  depositos.forEach(async (dep)=>{
    empresas.forEach(async (emp)=>{
      await emp.addDeposito(dep)
    })
  })

  // for(const prod of productos ){
  //   const depositos = await Deposito.findByPk();
  // }

}

module.exports = {
  fnRols,
  fnTipoDepositos,
  fnEmpresas,
  fnDepositos,
  fnCategorias,
  fnSubcategoria,
  fnRelProdSubCat,
};
