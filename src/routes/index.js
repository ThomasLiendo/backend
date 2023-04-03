const express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Categories = require("./categories");
const Home = require('./home');
const User = require('./user');
const Product = require('./producto')


const router = express();

router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/categories", Categories);
router.use('/product', Product );
router.use('/user', User );
router.use('/', Home );


router.all("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
