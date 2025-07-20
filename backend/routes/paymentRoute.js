import express from 'express';

import { PaymentFailedCallBack, PaymentIPNCallBack, PaymentSuccessCallBack } from '../controllers/paymentController.js';
const paymentRouter = express.Router();

paymentRouter.post("/success/:id", PaymentSuccessCallBack);
paymentRouter.post("/failed/:id", PaymentFailedCallBack);
paymentRouter.post("/ipn", PaymentIPNCallBack);

export default paymentRouter;