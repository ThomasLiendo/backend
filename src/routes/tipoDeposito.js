const { Router } = require("express");

const allTipoDepositos = require("../middlewares/tipoDepositos/allTipoDepositos");
const updateTipoDeposito = require("../middlewares/tipoDepositos/updateTipoDeposito");
const createTipoDeposito = require("../middlewares/tipoDepositos/createTipoDeposito");
const deleteTipoDeposito = require("../middlewares/tipoDepositos/deleteTipoDeposito");
const findTipoDepositoByID = require("../middlewares/tipoDepositos/findTipoDepositoByID");

const router = Router();

router.get("/", allTipoDepositos, async (req, res) => {
  return res.json(req.body.allTipoDDepositos);
});
router.get("/:id", findTipoDepositoByID, async (req, res) => {
  return res.json(req.body.findTipoDepositoByID);
});
router.post("/", createTipoDeposito, async (req, res) => {
  return res.status(200).send(req.body.resultado);
});

router.put("/:id", updateTipoDeposito, async (req, res) => {
  return res.json(req.body.resultado);
});

router.delete("/:id", deleteTipoDeposito, async (req, res) => {
  return res.json({
    respuesta: `Tipo de deposito con id ${req.body.eliminado} eliminado`,
  });
});
module.exports = router;