import bcrypt from 'bcrypt';
import mongooseUser from '../models/user-model.js';
import jwt from 'jsonwebtoken';


async function login(userParams){
    const {email, password} = userParams
    // console.log("email: ",email,"password: ", password)
    try {
        const user = await mongooseUser.findOne({ email: email });
        // console.log("user: ", user)
        if (!user) {
            return { status: 401, json: { message: 'Invalid email or password' } };
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        // console.log("isPasswordValid: ", isPasswordValid)
        if (!isPasswordValid) {
            return { status: 401, json: { message: 'Invalid email or password' } };
        }

        const token = jwt.sign({email:user.email}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        return {
            token: token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username, 
                address: user.address,
            },
        };
    } catch (error) {
        console.log(error)
    }
}

export default {login}
