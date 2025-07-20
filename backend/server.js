import express from "express"
import cors from 'cors'
import connectDB from "./config/mongodb.js"
import cloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"
import aiRouter from "./routes/aiRoute.js"
import dotenv from 'dotenv';
import paymentRouter from "./routes/paymentRoute.js"




// app config
dotenv.config();
const app = express();
const port = process.env.PORT || 4000
connectDB()
cloudinary




// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/ai", aiRouter)
app.use("/api/payment", paymentRouter)


app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))