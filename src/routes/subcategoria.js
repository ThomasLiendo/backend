const { Router } = require("express");
const allSubCategory = require("../middlewares/subcategories/allSubCategories");
const createSubCategory = require("../middlewares/subcategories/createSubCategory");
const deleteSubCategory = require("../middlewares/subcategories/deleteSubCategory");
const updateSubCategory = require("../middlewares/subcategories/updateSubCategory");

const router = Router();

router.get("/", allSubCategory, async (req, res) => {
  return res.json(req.body.allSubCategories);
});

router.post("/", createSubCategory, async (req, res) => {
  return res.status(200).send(req.body.resultado);
});

router.delete("/id", deleteSubCategory, async (req, res) => {
  return res.json({
    respuesta: `categoria con id ${req.body.eliminado} eliminado`,
  });
});

router.put("/id", updateSubCategory, async (req, res) => {
  return res.json(req.body.resultado);
});
module.exports = router;
