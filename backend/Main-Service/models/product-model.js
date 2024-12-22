import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
    title: {
        type:String
    },
    description:  {
        type:String
    },
    stock: {
        type:Number
    },
    price: {
        type:Number
    },
    category: {
        type: String
    },
    image: {
        type:String
    }
    },
    { timestamps: true }
)

export default mongoose.model('Product', productSchema)
