require("dotenv").config();
const {GMAIL_PASSWORD} = process.env;
const nodemailer = require("nodemailer");
const registroEmpresa = require("../../htmlTemplates/registroEmpresa");
const {Usuario} =require("../../db");

const sendEmail = async (req, res, next) =>{
    try {
        const {email, clave} = req.body;
        const findUsuario = await Usuario.findOne({where:{email:email}});
        console.log(findUsuario)
        if(!findUsuario){
            return res.status(404).send("Data missing")
        }
        const subject = "Registro de Empresa en Eagle Solutions APP"
        const message = `Ya esta creada tu usuario como administrador correo electronico: ${email}, clave: ${clave}`
        nodemailer.createTestAccount((err,account) =>{
            var htmlEmail = registroEmpresa(email, clave)
            let transporter = nodemailer.createTransport({
                host:"smtp.gmail.com",
                port: 587,
                auth: {
                    user: "techmerchpt@gmail.com",
                    pass: GMAIL_PASSWORD,
                }
            });
            let mailOptions= {
                from: "techmerchpt@gmail.com",
                to:email,
                replyTo: "techmerchpt@gmail.com",
                subject:subject,
                text: message,
                html:htmlEmail,
            }
            transporter.sendMail(mailOptions, (err,info)=>{
                if(err){
                    return res.status(404).send("Error sending Email");
                }
                return res.status(200).send("Email Sended")
            })

        })
    } catch (err) {
        console.log("ERROR al enviar correo");
        console.log(err.message);
        res.status(404).send("entro al Catch")
    }
}

module.exports= sendEmail;