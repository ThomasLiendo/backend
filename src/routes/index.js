const express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Home = require("./home");
const User = require("./user");
const Product = require("./producto");
const Categories = require("./categories");
const Deposito = require("./deposito");
const Rols = require("./rol");
const Empresas = require("./empresas");

const router = express();

router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/empresas", Empresas);
router.use("/rols", Rols);
router.use("/categorias", Categories);
router.use("/productos", Product);
router.use("/usuarios", User);
router.use("/depositos", Deposito);
router.use("/", Home);

router.all("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
