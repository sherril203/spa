const nodemailer=require('nodemailer') //task -07-08-2025
require('dotenv').config()
const  pass=process.env.MAIL_PASS
const user_mail=process.env.USER_MAIL
//const receiver=process.env.RECEIVER_MAIL
//static
const transport =nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:user_mail,
        pass:pass
    }  
})
//dynamic 
const mailOptions={
    from :user_mail,
    to:"sherriljameskumar@gmail.com",
    subject:"booking for appointment",
    text:"thank you for booking appointment from our spa  "
}
//for mail
const mail=()=>transport.sendMail(mailOptions,(err,info)=>{
 if(err){
    console.log("err",err)
 }
 console.log("info",info)
})



await transport.sendMail(mailOptions,(err, info) =>{
    if(err){
        console.log("err", err)
    }
    console.log("info", info.response)
})


module.exports = mail;