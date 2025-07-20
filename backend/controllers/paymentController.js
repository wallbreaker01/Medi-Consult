import appointmentModel from "../models/appointmentModel.js";

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const PaymentSuccessCallBack = async (req, res) => {
    const { id } = req.params;
    try {
        const appointmentData = await appointmentModel.findById(id).populate('userId').populate('docId');
        if (!appointmentData) {
            return res.redirect(`${FRONTEND_URL}/my-appointments`);
        }
        appointmentData.isPaid = true;
        await appointmentData.save();
        res.redirect(`${FRONTEND_URL}/payment-success/${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const PaymentFailedCallBack = async (req, res) =>{
    const { id } = req.params;
    try {
        res.redirect(`${FRONTEND_URL}/payment-failed/${id}`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const PaymentIPNCallBack = async (req, res) => {
    const { id } = req.body.tran_id;
    const { status } = req.body;
    try {
        if (status === "VALID") {
            await appointmentModel.findByIdAndUpdate(id, { isPaid: true });
            return res.redirect(`${FRONTEND_URL}/payment-success/${id}`);
        } else {
            await appointmentModel.findByIdAndUpdate(id, { isPaid: false });
            return res.redirect(`${FRONTEND_URL}/payment-failed/${id}`);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export { PaymentSuccessCallBack, PaymentFailedCallBack, PaymentIPNCallBack };