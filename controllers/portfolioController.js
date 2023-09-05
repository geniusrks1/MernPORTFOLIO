const nodemailer = require('nodemailer');
const postmarkTransport = require('nodemailer-postmark-transport');
const transport = nodemailer.createTransport(postmarkTransport({
  auth: {
    apiKey: process.env.API_POSTMARK
  }
}));


const sendEmailController=(req,res)=>{
    try{
        const{ email,name,msg}=req.body;
        if(!email|| !name|| !msg){
            return res.status(500).send({
                success:false,
                message:"Please provide all fields"
            });
        }

        transport.sendMail({
  from: {email},
  to: 'gmrohitkumar@gmail.com',
  subject: 'REGARDING PORTFOLIO',
  text: {msg},
  html: '<h1>Hello</h1>'
        }, function (err, info) {
            if (err) {
              console.error(err);
            } else {
              console.log(info);
            }
          });




return res.status(200).send({
    success:true,
    message:"Your message send succesfully"
})
    }
    catch(error){
console.log(error);
return res.status(500).send({
    success:false,
    message:"sending mail error",
    error
})
    }

};

module.exports={sendEmailController};