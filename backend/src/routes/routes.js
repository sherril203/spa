const express=require('express')
const AppointmentController=require('../controllers/Appointment.controllers')
const FeedbackControllers=require('../controllers/Feedback.controllers')
const router =express.Router()

//post
router.post("/postAppointment",AppointmentController.postAppointment)
//GET
router.get("/showAppointments", AppointmentController.getAppointment)
//get queries
router.get("/showquery",FeedbackControllers.getFeedback)
//post queries
router.post("/postquery", FeedbackControllers.postFeedback)
module.exports=router