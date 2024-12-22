import express from 'express'
import userController from '../controller/user-controller.js'
import authMiddleware from '../middleware/authentication-middleware.js'

const userRouter = express.Router();

userRouter.put('/:id', userController.updateUser)
userRouter.delete('/:id', userController.deleteUser)
userRouter.get('/:id', userController.getUser)
userRouter.get('/', userController.getAllUsers)

export default userRouter;