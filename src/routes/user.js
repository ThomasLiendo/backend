const { Router } = require('express');
const allUsers = require('../middlewares/users/allUsers');
const createUser = require('../middlewares/users/createUser');
const updateUsers = require('../middlewares/users/updateUsers');

const router = Router();

router.get('/',allUsers, async(req,res)=>{

    return res.json(req.body.allUsers) 
})

router.post('/', createUser, async(req,res)=>{
    const {nombre, apellido, email} = req.body;
    return res.status(200).send({respuesta:`el Usuario ` + nombre + ` ` + apellido + ` con email ` + email + ` se ah creado exitosamente`}) 
})

router.put('/',updateUsers, async(req,res)=>{
    
    return res.json({respuesta: `usuario actualizado`}) 
})

// router.delete('/',allUsers, async(req,res)=>{
    
//     return res.json(req.body.allUsers) 
// })

module.exports = router;