import express from 'express';
import { loginDoctor, appointmentsDoctor, appointmentCancel, appointmentComplete } from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';
const doctorRouter = express.Router();

doctorRouter.post("/login", loginDoctor)
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel)
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor)
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete)


export default doctorRouter;