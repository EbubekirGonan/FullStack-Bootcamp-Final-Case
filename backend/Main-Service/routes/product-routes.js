import express from 'express'
import productController from '../controller/product-controller.js'

const productRouter = express.Router();

productRouter.post('/', productController.createProduct)
productRouter.put('/:id', productController.updateProduct)
productRouter.delete('/:id', productController.deleteProduct)
productRouter.get('/:id', productController.getProduct)
productRouter.get('/', productController.getAllProducts)

productRouter.get('/search/:text', productController.searchProducts)

export default productRouter;