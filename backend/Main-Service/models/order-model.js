import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
    {
    userId: {
        type:String
    },
    products:  {
        type:Object
    },
    },
    { timestamps: true }
)

export default mongoose.model('order', orderSchema)
