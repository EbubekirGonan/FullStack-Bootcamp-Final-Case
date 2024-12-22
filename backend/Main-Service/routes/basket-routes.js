import express from 'express'
import basketController from '../controller/basket-controller.js'

const basketRouter = express.Router();

basketRouter.post('/', basketController.addProductToBasket)
basketRouter.get('/:userId', basketController.getBasket)
basketRouter.delete('/', basketController.removeProductFromBasket)
basketRouter.delete('/:userId', basketController.clearBasket)

export default basketRouter;