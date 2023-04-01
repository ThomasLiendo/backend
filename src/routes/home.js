const { Router } = require('express');

const router = Router();

router.get('/', async(req,res)=>{
    console.log("home")
    return res.json(req.body.nombreDeLaPropiedad) 
})

module.exports = router;