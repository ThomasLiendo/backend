const { Usuario, Empresa, Rol, Op } = require("../../db");

const allUser = async (req, res, next) => {
  const {empresaId} = req.query;
  try {
    if(empresaId){
      const allUsers = await Usuario.findAll({
        where:{EmpresaId:empresaId},
        include: [
          {
            model: Empresa,
            attributes: ["id", "nombre"]
          },
          {
            model:Rol,
            attributes:["id","rol"]
          }       
        ],
        attributes:["id","nombre","apellido","clave","email","bloqueo"]
      });
      req.body.allUsers = { status: 200, resultado: allUsers };
      next();
    }else{
      const allUsers = await Usuario.findAll({
        include: [
          {
            model: Empresa,
            attributes: ["id", "nombre"]
          },
          {
            model:Rol,
            attributes:["id","rol"]
          }       
        ],
        attributes:["id","nombre","apellido","clave","email","bloqueo"]
      });
      req.body.allUsers = { status: 200, resultado: allUsers };
      next();
    }
  } catch (err) {
    console.log("error en allUser", err.message);
    req.body.allUsers = { status: 404, resultado: err.message };
  }
};

module.exports = allUser;