
// // Function to send appointment confirmation email
// const sendAppointmentMail = async (name, to, appointmentDate) => {
//   console.log("to email :", to);
//   const mailOptions = {
//     from: user_mail, // Sender email
//     to: to,          // Recipient email
//     subject: "Your Appointment Confirmation",
//     text: `
//       Hi ${name},

//       Thank you for booking an appointment with us.
//       You have booked an appointment on ${appointmentDate}.

//       We look forward to seeing you!

//       Best regards,
//       [Your Spa Name]
//     `,
//   };


const nodemailer = require('nodemailer');
require('dotenv').config();


const user_mail  =  process.env.USER_MAIL;
const mail_pass = process.env.MAIL_PASS;

const transport = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user: user_mail,
        pass : mail_pass
    },
})

const sendMailer = async(to,subject,data) =>{
    try{
        const mailoptions = {
            from: user_mail,
            to,
            subject,
            data  ,
            text:"thank you for booking appointment"
        }

        const info = await transport.sendMail(mailoptions)
        console.log("email send",info.response)
        return info
    }catch(error){
        console.log("error sending email : " ,error)
        throw error
    };
};


module.exports = sendMailer
