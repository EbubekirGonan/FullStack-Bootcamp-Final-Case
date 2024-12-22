import mongoose from 'mongoose'

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('baglandik')
    } catch (error) {
        console.log('Mongo Error: ', error)
    }
    
}

export {connectDB}