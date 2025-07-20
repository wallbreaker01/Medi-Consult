import express from 'express';
import { loginUser, registerUser, getProfile, updateProfile,bookAppointment,cancelAppointment,listAppointment, payAppointmentBooking } from '../controllers/userController.js';
import upload from '../middleware/multer.js';
import authUser from '../middleware/authUser.js';



const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/get-profile", authUser, getProfile)
userRouter.post("/update-profile",authUser, upload.single('image'),  updateProfile)
userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.post("/cancel-appointment", authUser, cancelAppointment)
userRouter.get("/appointments", authUser, listAppointment)
userRouter.post("/pay/:id", payAppointmentBooking);

export default userRouter;