const { Router } = require("express");
const allEmpresas = require("../middlewares/empresas/allEmpresas");
const findEmpresaByID = require("../middlewares/empresas/findEmpresaByID");
const createEmpresa = require("../middlewares/empresas/createEmpresa");
const updateEmpresa = require("../middlewares/empresas/updateEmpresa");
const deleteEmpresa = require("../middlewares/empresas/deleteEmpresa");

const router = Router();

router.get("/", allEmpresas, async (req, res) => {
  return res.json(req.body.AllEmpresas);
});

router.get("/:id", findEmpresaByID, async (req, res) => {
  return res.json(req.body.findEmpresaByID);
});

router.post("/", createEmpresa, async (req, res) => {
  return res.status(200).send(req.body.resultado);
});

router.put("/:id", updateEmpresa, async (req, res) => {
  return res.json(req.body.resultado);
});
module.exports = router;

router.delete("/:id", deleteEmpresa, async (req, res) => {
  return res.json(req.body.eliminado);
});
