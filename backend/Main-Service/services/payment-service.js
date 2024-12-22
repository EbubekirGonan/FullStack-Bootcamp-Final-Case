import kafka from '../utils/kafka.js'

async function payment(reqBody) {
    try {
        const reqBodyString = JSON.stringify(reqBody);
        kafka.sendMessage('payment', `payment succesful${reqBodyString}`)
        kafka.sendMessage('invoice', `invoice succesful${reqBodyString}`)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    
}

export default {payment}