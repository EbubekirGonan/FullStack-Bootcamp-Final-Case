import express from 'express'
import authController from '../controller/auth-controller.js'
import authMiddleware from '../middleware/authentication-middleware.js';

const authRouter = express.Router();

authRouter.post('/login', authController.login)
authRouter.post('/', authController.register)

export default authRouter;