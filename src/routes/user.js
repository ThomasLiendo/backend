const { Router } = require('express');
const allUsers = require('../middlewares/users/allUsers');
const createUser = require('../middlewares/users/createUser');
const updateUsers = require('../middlewares/users/updateUsers');
const deleteUser = require('../middlewares/users/deleteUser');

const router = Router();

router.get('/', allUsers, async(req,res)=>{
    return res.json(req.body.allUsers) 
})

router.post('/', createUser, async(req,res)=>{
    const {nombre, apellido, email} = req.body;
    return res.status(200).send(req.body.resultado) 
})

router.put('/', updateUsers, async(req,res)=>{   
    return res.json({respuesta: `usuario actualizado`}) 
})

router.delete('/', deleteUser, async(req,res)=>{   
    return res.json({respuesta:`usuario con id ${req.body.eliminado} eliminado`}) 
})

module.exports = router;