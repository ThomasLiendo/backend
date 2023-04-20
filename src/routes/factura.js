const { Router } = require("express");

const allFacturas = require("../middlewares/facturas/allFacturas");
const createFacturas = require("../middlewares/facturas/createFacturas");
const deleteFacturas = require("../middlewares/facturas/deleteFacturas");

const router = Router();

router.get("/", allFacturas, async (req, res) => {
  return res.json(req.body.allFacturas);
});

router.post("/", createFacturas, async (req, res) => {
  return res.status(200).send(req.body.resultado);
});

router.delete("/:id", deleteFacturas, async (req, res) => {
  return res.json({
    respuesta: `factura con id ${req.body.eliminado} eliminado`,
  });
});
module.exports = router;
