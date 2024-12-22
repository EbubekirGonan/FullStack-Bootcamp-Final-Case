import express from 'express'
import orderController from '../controller/order-controller.js'

const orderRouter = express.Router();

orderRouter.post('/', orderController.createOrder)
orderRouter.put('/:id', orderController.updateOrder)
orderRouter.delete('/:id', orderController.deleteOrder)
orderRouter.get('/:id', orderController.getOrder)
orderRouter.get('/', orderController.getAllOrders)

export default orderRouter;