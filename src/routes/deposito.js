const { Router } = require("express");

const allDepositos = require("../middlewares/depositos/allDepositos");
const updateDeposito = require("../middlewares/depositos/updateDeposito");
const createDeposito = require("../middlewares/depositos/createDeposito");
const deleteDeposito = require("../middlewares/depositos/deleteDeposito");

const router = Router();

router.get("/", allDepositos, async (req, res) => {
  return res.json(req.body.allDepositos);
});

router.post("/", createDeposito, async (req, res) => {
  return res.status(200).send(req.body.resultado);
});

router.put("/:id", updateDeposito, async (req, res) => {
  return res.json(req.body.resultado);
});

router.delete("/:id", deleteDeposito, async (req, res) => {
  return res.json({
    respuesta: `deposito con id ${req.body.eliminado} eliminado`,
  });
});
module.exports = router;
