import mongooseOrder from '../models/order-model.js';
import kafka from '../utils/kafka.js'

async function createOrder(orderParams){
    const {userId, products} = orderParams
    try {
        const newOrder = new mongooseOrder({
            userId,
            products,
        })
        const response = newOrder.save()
        if(newOrder) {
            // kafka.sendMessage('order', `orderId: ${newOrder.id}`)
            return response
        } else {
            return false
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

async function updateOrder(id, updateFields) {
    try {
        const updatedOrder = await mongooseOrder.findByIdAndUpdate(id, updateFields, {new: true});

        if(!updatedOrder){
            throw new Error('Order not found')
        }
        return updatedOrder;
    } catch (error) {
        console.log("Error Mesage: ", error)
    }
}

async function deleteOrder(orderParams) {
    const { id } = orderParams
    try {
        const deletedOrder = await mongooseOrder.findByIdAndDelete(id)
        if(!deletedOrder){
            throw new Error('Order not found')
        }else {
            kafka.sendMessage('order', ` Deleted orderId: ${deletedOrder.id}`)
        }
        return deletedOrder
    } catch (error) {
        console.log('error: ', error)
        return false
    }
}

async function getOrder(orderParams) {
    const { id } = orderParams
    try {
        const order = await mongooseOrder.findOne({userId: id})
        return order;
    } catch (error) {
        console.log(error)
        return false
    }
}

async function getAllOrders() {
    try {
        const allOrders = await mongooseOrder.find()
        return allOrders
    } catch (error) {
        console.log('error: ', error)
    }
}



export default { createOrder, updateOrder, deleteOrder, getOrder, getAllOrders }