import authService from '../services/auth-service.js'
import userService from '../services/user-service.js'

const authController = {
    login: async(req, res) => {

        if(!req.body.email || !req.body.password){
            return res.status(400).send({message: "email and password required"})
        }
        try {
            const response = await authService.login(req.body)
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }
    },
    register: async(req, res) => {
        try {
            const response = await userService.createUser(req.body);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }    
    }
}

export default authController;