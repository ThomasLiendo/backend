const { Router } = require("express");

const allRemitos = require("../middlewares/remito/allRemitos");
const createRemitos = require("../middlewares/remito/createRemitos");
const deleteRemitos = require("../middlewares/remito/deleteRemitos");

const router = Router();

router.get("/", allRemitos, async (req, res) => {
  return res.json(req.body.allRemitos);
});

router.post("/", createRemitos, async (req, res) => {
  return res.status(200).send(req.body.resultado);
});

router.delete("/:id", deleteRemitos, async (req, res) => {
  return res.json({
    respuesta: `remito con id ${req.body.eliminado} eliminado`,
  });
});
module.exports = router;
