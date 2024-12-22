import express from 'express'
import paymentController from '../controller/payment-controller.js'

const paymentRouter = express.Router();

paymentRouter.post('/', paymentController.payment)

export default paymentRouter;