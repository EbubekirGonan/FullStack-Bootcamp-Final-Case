import orderService from '../services/order-service.js'

const orderController = {
    createOrder: async(req, res) => {
        const { userId, products } = req.body

        if(!userId){
            return res.status(502).send({message: 'userId is required'})
        }
        if(!products){
            return res.status(502).send({message: 'products is required'})
        }
        try {
            const response = await orderService.createOrder(req.body);
            console.log('response: ', response)
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        } 
    },
    updateOrder: async(req, res) => {
        const { id } = req.params
        const updateFields = req.body
        try {
            const response = await orderService.updateOrder(id, updateFields);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }
    },
    deleteOrder: async(req, res) => {
        try {
            const response = await orderService.deleteOrder(req.params);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('error: ', error)
            return false
        }    
    },
    getOrder: async(req, res) => {
        try {
            const response = await orderService.getOrder(req.params);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('error: ', error)
            return false
        }
    },
    getAllOrders: async(req, res) => {
        try {
            const response = await orderService.getAllOrders()
            res.status(200).send({response: response})
        } catch (error) {
            console.log('error: ', error)
            return false
        }
    }
}

export default  orderController;