const AppointmentModel = require("../models/Appointment.model");

const postAppointment = async (req, res) => {
  try {
    console.log("Incoming data:", req.body); // debug

    const stored_data = new AppointmentModel(req.body);
    await stored_data.save();

    return res.status(200).send({
      message: "Appointment booked",
      data: stored_data,
    });
  } catch (err) {
    console.error("Error saving appointment:", err);
    return res.status(500).send("error in appointment");
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
