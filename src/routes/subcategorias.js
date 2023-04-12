const { Router } = require("express");

const allSubcategoria = require("../middlewares/subcategorias/allSubcategorias");
const createSubcategoria = require("../middlewares/subcategorias/createSubcategoria");
const deleteSubcategoria = require("../middlewares/subcategorias/deleteSubcategoria");

const router = Router();

router.get("/", allSubcategoria, async (req, res) => {
  return res.json(req.body.allSubcategories);
});

router.post("/", createSubcategoria, async (req, res) => {
  const { nombre, descripcion } = req.body;
  return res.status(200).send(req.body.resultado);
});

router.delete("/id", deleteSubcategoria, async (req, res) => {
  return res.json({
    respuesta: `subcategoria con id ${req.body.eliminado} eliminado`,
  });
});

module.exports = router;
