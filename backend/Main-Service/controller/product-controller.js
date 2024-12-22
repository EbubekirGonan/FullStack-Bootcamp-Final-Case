import productService from '../services/product-service.js'

const productController = {
    createProduct: async(req, res) => {
        const {title, description, stock, price, category, image} = req.body
        try {
            const response = await productService.createProduct(title, description, stock, price, category, image);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        } 
    },
    updateProduct: async(req, res) => {
        const { id } = req.params
        const updateFields = req.body
        try {
            const response = await productService.updateProduct(id, updateFields);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }
    },
    deleteProduct: async(req, res) => {
        try {
            const response = await productService.deleteProduct(req.params);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('error: ', error)
            return false
        }    
    },
    getProduct: async(req, res) => {
        try {
            const response = await productService.getProduct(req.params);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('error: ', error)
            return false
        }
    },
    getAllProducts: async(req, res) => {
        try {
            const response = await productService.getAllProducts()
            res.status(200).send({response: response})
        } catch (error) {
            console.log('error: ', error)
            return false
        }
    },
    searchProducts: async(req, res) => {
        const { text } = req.params
        try {
            const response = await productService.searchProducts(text)
            res.status(200).send({response: response})
        } catch (error) {
            console.log('error: ', error)
            return false
        }
    }
}

export default productController;