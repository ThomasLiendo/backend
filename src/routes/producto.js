const { Router } = require('express');
const allProducts = require('../middlewares/users/allUsers');
// const createProduct = require('../middlewares/users/createUser');
// const updateProduct = require('../middlewares/users/updateUsers');
// const deleteProduct = require('../middlewares/users/deleteUser');

const router = Router();

router.get('/', allProducts, async(req,res)=>{
    return res.json(req.body.allProducts);
})

// router.post('/', createProduct, async(req,res)=>{
//     const {nombre, apellido, email} = req.body;
//     return res.status(200).send(req.body.resultado) 
// })

// router.put('/', updateProduct, async(req,res)=>{   
//     return res.json({respuesta: `usuario actualizado`}) 
// })

// router.delete('/', deleteProduct, async(req,res)=>{   
//     return res.json({respuesta:`usuario con id ${req.body.eliminado} eliminado`}) 
// })

module.exports = router;