const express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Home = require("./home");
const User = require("./user");
const Product = require("./producto");
const Categories = require("./categorias");
const SubCategories = require("./subcategoria");
const Deposito = require("./deposito");
const Rols = require("./rol");
const Empresas = require("./empresas");
const TipoDepositos = require("./tipoDepositos");
const router = express();
const TipoSuscripcion = require("./tipoSuscripcion");
const Factura = require("./factura");
const OrdenDeCompra = require("./ordenDeCompra");
const Remito = require("./remitos");

router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/tipoDepositos", TipoDepositos);
router.use("/empresas", Empresas);
router.use("/categorias", Categories);
router.use("/subcategorias", SubCategories);
router.use("/productos", Product);
router.use("/usuarios", User);
router.use("/depositos", Deposito);
router.use("/roles", Rols);
router.use("/", Home);
router.use("/tipoSuscripcion", TipoSuscripcion);
router.use("/facturas", Factura);
router.use("/ordenDeCompras", OrdenDeCompra);
router.use("/remitos", Remito);

router.all("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
