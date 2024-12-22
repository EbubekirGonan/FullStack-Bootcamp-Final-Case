import express from 'express'
import authRouter from './auth-routes.js'
import userRouter from '../routes/user-routes.js'
import productRouter from './product-routes.js'
import orderRouter from './order-routes.js'
import basketRouter from './basket-routes.js'
import paymentRouter from './payment-routes.js'

import authMiddleware from '../middleware/authentication-middleware.js'


const router = express.Router();

router.use('/auth', authRouter)
router.use('/user',authMiddleware, userRouter)
router.use('/product',authMiddleware, productRouter)
router.use('/order', authMiddleware, orderRouter)
router.use('/basket', authMiddleware, basketRouter)
router.use('/payment', authMiddleware, paymentRouter)


export default router;