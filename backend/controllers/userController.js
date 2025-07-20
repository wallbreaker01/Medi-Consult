import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import  cloudinary from "../config/cloudinary.js";
import SSLCommerzPayment from "sslcommerz-lts";

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWD;
const is_live = false;

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

// API to register user
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        
        if (password.length < 5) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword,
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to login user
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get user profile data
const getProfile = async (req, res) => {

    try {
        const userId = req.userId; // ✅ Now it's coming from middleware
        const userData = await userModel.findById(userId).select('-password')

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update user profile
const updateProfile = async (req, res) => {

    try {

        const {  name, phone, address, dob, gender } = req.body
        const userId = req.userId; // ✅ Get userId from middleware, not body
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" })
        }

        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender })

        if (imageFile) {

            // upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, { image: imageURL })
        }

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const payAppointmentBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const appointmentData = await appointmentModel.findById(id).populate('userId').populate('docId');

        if (!appointmentData) {
            return res.json({ success: false, message: 'Appointment not found' });
        }
        
        if (appointmentData.cancelled) {
            return res.json({ success: false, message: 'Appointment already cancelled' });
        }
        else if (appointmentData.isPaid) {
            return res.json({ success: false, message: 'Appointment already paid' });
        }
        else {
            const data = {
                total_amount: appointmentData.amount, // registration fee
                currency: "BDT",
                tran_id: id,
                success_url: `${BACKEND_URL}/api/payment/success/${id}`,
                fail_url: `${BACKEND_URL}/api/payment/failed/${id}`,
                cancel_url: `${BACKEND_URL}/api/payment/cancel/${id}`,
                ipn_url: `${BACKEND_URL}/api/payment/ipn`,
                shipping_method: "Courier",
                product_name: "Appointment Booking Fee",
                product_category: "N/A",
                product_profile: "general",
                cus_name: appointmentData.userData.name,
                cus_email: appointmentData.userData.email,
                cus_add1: "Sylhet",
                cus_add2: "N/A",
                cus_city: "N/A",
                cus_state: "N/A",
                cus_postcode: "N/A",
                cus_country: appointmentData.userData.country || "Bangladesh",
                cus_phone: appointmentData.userData.phone || "01700011122",
                cus_fax: "N/A",
                ship_name: appointmentData.userData.name,
                ship_add1: "SUST",
                ship_add2: "N/A",
                ship_city: "N/A",
                ship_state: "N/A",
                ship_postcode: 1000,
                ship_country: appointmentData.userData.country || "Bangladesh",
            }
            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.status(200).json({ success: true, message: "Payment is processing, please wait...", url:GatewayPageURL });
            console.log('Redirecting to: ', GatewayPageURL)
        });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API to book appointment 
const bookAppointment = async (req, res) => {

    try {

        const {  docId, slotDate, slotTime } = req.body
        const userId = req.userId; // ✅ Get userId from middleware, not body
        const docData = await doctorModel.findById(docId).select("-password")

        if (!docData.available) {
            return res.json({ success: false, message: 'Doctor Not Available' })
        }

        let slots_booked = docData.slots_booked

        
        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: 'Slot Not Available' })
            }
            else {
                slots_booked[slotDate].push(slotTime)
            }
        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select("-password")

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        
        await doctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: 'Appointment Booked' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to cancel appointment
const cancelAppointment = async (req, res) => {
    try {

        const {  appointmentId } = req.body
        const userId = req.userId; // ✅ Get userId from middleware, not body
        const appointmentData = await appointmentModel.findById(appointmentId)

        
        if (appointmentData.userId !== userId) {
            return res.json({ success: false, message: 'Unauthorized action' })
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

         
        const { docId, slotDate, slotTime } = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await doctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: 'Appointment Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get user appointments for frontend my-appointments page
const listAppointment = async (req, res) => {
    try {

        const userId = req.userId; // ✅ Get userId from middleware, not body
        const appointments = await appointmentModel.find({ userId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export {
    loginUser,
    registerUser,
    getProfile,
    updateProfile,
    bookAppointment,
    cancelAppointment,
    listAppointment,
    payAppointmentBooking
}