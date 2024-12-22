import redis from '../utils/redis.js'


async function addProductToBasket(userId, product) {
    const basketKey = userId 

    try {
        const client = redis.client
        const basketData = await client.get(basketKey)
        const getBasket = basketData ? JSON.parse(basketData) : []
        getBasket.push(product)
        await client.set(basketKey, JSON.stringify(getBasket))
        console.log('getBasket: ', getBasket)
    } catch (err) {
        console.log(err)
    }
}

async function getBasket(params) {
    const basketKey = params.userId;
    try {
        const client = redis.client
        const basket = await client.get(basketKey)
        return JSON.parse(basket)
    } catch (error) {
        console.log(error)
        return false
    }
}

async function removeProductFromBasket(userId, productId) {
    try {
        const client = redis.client
        const getBasket = await client.get(userId) ? JSON.parse(await client.get(userId)) : [];
        console.log("getBasket: ", getBasket)
        const indexToRemove = getBasket.findIndex(product => product._id === productId)
        console.log("indexToRemove: ", indexToRemove)
        if(indexToRemove !== -1){
            getBasket.splice(indexToRemove, 1)
        } 
        await client.set(userId, JSON.stringify(getBasket))
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

async function clearBasket(userId) {
    try {
        const client = redis.client
        await client.del(userId)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    
}


export default { addProductToBasket, removeProductFromBasket, getBasket, clearBasket }