const { Router } = require("express");

const allTipoSuscripcion = require("../middlewares/tipoSuscripcion/alltipoSuscripcion");
const createTipoSuscripcion = require("../middlewares/tipoSuscripcion/createTiposuscripcion");
const deleteTipoSuscripcion = require("../middlewares/tipoSuscripcion/deleteTipoSuscripcion");

const router = Router();

router.get("/", allTipoSuscripcion, async (req, res) => {
  return res.json(req.body.allTipoSuscripcion);
});
router.post("/", createTipoSuscripcion, async (req, res) => {
  return res.status(200).send(req.body.resultado);
});

router.delete("/:id", deleteTipoSuscripcion, async (req, res) => {
  return res.json(req.body.eliminado);
});
module.exports = router;
