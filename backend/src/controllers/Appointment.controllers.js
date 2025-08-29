const sendMailer = require("../../../backend/src/utils/mailService");
const AppointmentModel = require("../model/Appointment.model");

const postAppointment = async (req, res) => {
  try {
    console.log("Incoming data:", req.body); // debug

    // Save appointment
    const stored_data = new AppointmentModel(req.body);
    console.log('appointment book : ',req.body);  
    await stored_data.save();

    // Send email
    const { name, email, ...restof } = req.body;
    console.log(name,email,restof);
    const mailResult = await sendMailer(email,"sample mail",restof);

    if (!mailResult) {
      console.error("Email failed:", mailResult.error);
      return res.status(500).send({
        message: "Appointment booked, but email failed to send",
        data: stored_data,
      });
    }

    return res.status(200).send({
      message: "Appointment booked and confirmation email sent",
      data: stored_data,
    });
  } catch (err) {
    console.error("Error saving appointment:", err);
    return res.status(500).send("Error in appointment");
  }
};


const getAppointment = async (req, res) => {
  try {
    const showAppointment = await AppointmentModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showAppointment });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send("error in get data");
  }
};

module.exports = { postAppointment, getAppointment };
