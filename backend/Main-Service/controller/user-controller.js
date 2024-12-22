import userService from '../services/user-service.js'

const userController = {
    updateUser: async(req, res) => {
        const { id } = req.params
        const updateFields = req.body

        try {
            const response = await userService.updateUser(id, updateFields);
            console.log('response: ', response)
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }
        
    },
    deleteUser: async(req, res) => {
        try {
            const response = await userService.deleteUser(req.params);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }    
    },
    getUser: async(req, res) => {
        try {
            // console.log(req)
            const response = await userService.getUser(req.params);
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }
    },
    getAllUsers: async(req, res) => {
        try {
            const response = await userService.getAllUsers()
            res.status(200).send({response: response})
        } catch (error) {
            console.log('err: ', error)
        }
    }
}

export default userController;