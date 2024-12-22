import paymentService from "../services/payment-service.js";

const paymentController = {
    payment: async (req, res) => {
        try {
            const response = await paymentService.payment(req.body)
            res.status(200).send({response:response})
        } catch (error) {
            console.log("error: ", error)
        }
    }
}

export default paymentController;