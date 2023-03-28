const { Router } = require('express');
const functionMiddleware = require('../middlewares/funcionDeEjemplo')

const router = Router();

router.get('/', functionMiddleware, async(req,res)=>{
    console.log("home")
    return res.json(req.body.nombreDeLaPropiedad) 
})

module.exports = router;