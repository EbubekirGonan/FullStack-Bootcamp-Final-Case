import bcrypt from 'bcrypt';
import mongooseUser from '../models/user-model.js';

async function createUser(userParams){
    const {username, email, password, address} = userParams
    try {
        const hashedPassword = bcrypt.hashSync(password,10)
        const newUser = new mongooseUser({
            username,
            email,
            password:hashedPassword,
            address,
        })
        newUser.save()
        return newUser
        
    } catch (error) {
        
    }
}

async function updateUser(id, updateFields) {
    try {
        if(updateFields.password){
            updateFields.password = bcrypt.hashSync(updateFields.password , 10)
        }

        const updatedUser = await mongooseUser.findByIdAndUpdate(id, updateFields, {new: true});

        if(!updatedUser){
            throw new Error('User not found')
        }
        
        console.log(updatedUser);
        return updatedUser;

    } catch (error) {
        console.log("Error Mesage: ", error)
    }
}

async function deleteUser(userParams) {
    const id = userParams.id
    try {
        const deletedUser = await mongooseUser.findByIdAndDelete(id)

        if(!deletedUser){
            throw new Error('User not found')
        }

        return deletedUser
    } catch (error) {
        console.log('error: ', error)
        return false
    }
}

async function getUser(userParams) {
    const id = userParams.id
    try {
        const user = await mongooseUser.findById(id)
        return user;
    } catch (error) {
        console.log(error)
    }
}

async function getAllUsers() {
    try {
        const allUsers = await mongooseUser.find()
        return allUsers
    } catch (error) {
        console.log("error: ", error)
    }
}
export default {createUser, updateUser, getUser, deleteUser, getAllUsers}