const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pass = process.env.MAIL_PASS;
const user_mail = process.env.USER_MAIL;

// Create reusable transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: user_mail,
    pass: pass,
  },
});

// Utility function to send email
const sendAppointmentMail = async (formData) => {
  const { name, email, mobile_no, gender, Service, Appointment_date } = formData;
  
  const mailOptions = {
    from: user_mail,       // Your email (sender)
    to: email,             // ✅ Sends email to the user who booked
    subject: "Your Appointment Confirmation",
    text: `
Hi ${name},

Thank you for booking an appointment with us.

Here are your appointment details:

Name: ${name}
Email: ${email}
Mobile No: ${mobile_no}
Gender: ${gender}
Service: ${Service}
Appointment Date: ${Appointment_date}

We look forward to seeing you!

Best regards,
[Your Spa Name]
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return { success: true, info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};


// Route to handle appointment form submission
app.post("/postAppointment", async (req, res) => {
  const formData = req.body;

  const result = await sendAppointmentMail(formData);

  if (result.success) {
    res.status(200).json({ message: "Appointment booked and email sent", data: formData });
  } else {
    res.status(500).json({ message: "Failed to send email", error: result.error });
  }
});

app.listen(4050, () => {
  console.log("Server running on http://localhost:4050");
});
