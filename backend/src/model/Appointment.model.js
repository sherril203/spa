
const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  mobile_no: { type: String, required: true ,unique:true},
  gender: { type: String, required: true },
  Service: { type: String, required: true },
  Appointment_date: { type: Date, required: true },
},{collection:'Appointment'});

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);
module.exports=AppointmentModel
