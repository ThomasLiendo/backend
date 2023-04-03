const { Router } = require("express");
const allCategory = require("../middlewares/categories/allCategories");
const createCategory = require("../middlewares/categories/createCategory");
const deleteCategory = require("../middlewares/categories/deleteCategory");
const updateCategory = require("../middlewares/categories/updateCategory");

const router = Router();

router.get("/", allCategory, async (req, res) => {
  return res.json(req.body.allCategory);
});

router.post("/", createCategory, async (req, res) => {
  const { nombre, descripcion } = req.body;
  return res.status(200).send(req.body.resultado);
});

router.delete("/", deleteCategory, async (req, res) => {
  return res.json({
    respuesta: `categoria con id ${req.body.eliminado} eliminado`,
  });
});

router.put("/", updateCategory, async (req, res) => {
  return res.json({ respuesta: `Categoria actualizado` });
});
module.exports = router;
