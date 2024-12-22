import basketService from '../services/basket-service.js'

const basketController = {
    addProductToBasket: async(req, res) => {
        const { userId, product } = req.body
        try {
            const response = await basketService.addProductToBasket(userId, product)
            res.status(200).send({response: response})
        } catch (error) {
            console.log(error)
        }
    },
    getBasket: async(req, res) => {
        try {
            const response = await basketService.getBasket(req.params)
            res.status(200).send({response:response})
        } catch (error) {
            console.log(error)
        } 
    },
    removeProductFromBasket: async(req, res) => {
        const { userId, productId } = req.body
        console.log("userId: ", userId , "productId: ", productId)
        try {
            const response = await basketService.removeProductFromBasket( userId, productId )
            res.status(200).send({response:response})
        } catch (error) {
            console.log(error)   
        }
    },
    clearBasket: async(req, res) => {
        const { userId } = req.params

        try {
            const response = await basketService.clearBasket(userId)
            res.status(200).send({response:response})
        } catch (error) {
            console.log(error)
        }
    }
}


export default basketController