const { Router } = require('express');
const allUsers = require('../middlewares/users/allUsers');
const createUser = require('../middlewares/users/createUser');

const router = Router();

router.get('/',allUsers, async(req,res)=>{

    return res.json(req.body.allUsers) 
})

router.post('/', createUser, async(req,res)=>{
    const {nombre, apellido, email} = req.body;
    return res.status(200).send({respuesta:`el Usuario ` + nombre + ` ` + apellido + ` con email ` + email + ` se ah creado exitosamente`}) 
})

// router.put('/',allUsers, async(req,res)=>{
    
//     return res.json(req.body.allUsers) 
// })

// router.delete('/',allUsers, async(req,res)=>{
    
//     return res.json(req.body.allUsers) 
// })

module.exports = router;