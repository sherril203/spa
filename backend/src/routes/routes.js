const express=require('express')
const AppointmentController=require('../controllers/Appointment.controllers')
const QueriesControllers=require('../controllers/Queries.controllers')
const router =express.Router()

//post
router.post("/postAppointment",AppointmentController.postAppointment)
//GET
router.get("/showAppointments", AppointmentController.getAppointment)
//get queries
router.get("/showquery",QueriesControllers.getQueries)
//post queries
router.post("/postquery", QueriesControllers.postQueries)
module.exports=router