const express = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Home = require('./home');

const router = express();

router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/', Home );

router.all("*", (req, res) => {
    res.redirect("/");
  });


module.exports = router;