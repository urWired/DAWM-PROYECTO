var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const details = require('../details.json');


router.post('/', (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
        console.log(`El correo ha sido enviado con éxito 😃 and the id is ${info.messageId}`);
        res.send(info);
    });
})

async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        service: 'gmail', // true for 465, false for other ports
        auth: {
            user: details.email,
            pass: details.password
        }
    });
  
    let mailOptions = {
        from: user.email, // sender address
        to: 'noeliaale12@gmail.com', // list of receivers
        subject: "Solicitud de contacto", // Subject line
        text: user.name +" dice: "+user.mensaje
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
}

module.exports = router;