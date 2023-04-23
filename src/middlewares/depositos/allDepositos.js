const { Deposito, Empresa, Producto, TipoDeposito } = require("../../db");

const allDepositos = async (req, res, next) => {
  try {
    const {empresaId} = req.query;
    if(empresaId){
      req.body.allDepositos = await Deposito.findAll({
        where:{EmpresaId:empresaId},
        include: [TipoDeposito,Empresa, Producto],
        order: [["nombre","ASC"]],
      });
      next();
    }else{
      req.body.allDepositos = await Deposito.findAll({
        include: [TipoDeposito,Empresa, Producto],
        order: [["nombre","ASC"]],
      });
      next();
    }
    
  } catch (error) {
    res.status(404).json("Error no se encontro allDepositos");
  }
};

module.exports = allDepositos;
