const { Router } = require("express");
const sendEmail = require("../middlewares/email/sendEmail")

const router = Router();

router.post("/", sendEmail);


module.exports = router;