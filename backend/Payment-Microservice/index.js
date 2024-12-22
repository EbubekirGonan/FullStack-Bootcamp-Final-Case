import { Kafka } from 'kafkajs'


const kafka = new Kafka({
    clientId: 'my-kafka-consumer',
    brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ 
    groupId: 'payment-group',
    sessionTimeout: 30000,
    heartbeatInterval: 5000
});

const run = async () => {
    await consumer.connect()
    console.log('Kafka Payment Consumer connected');

    await consumer.subscribe({ topic: 'payment', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({topic, partition, message }) => {
            createInvoice(message)
            console.log({
                topic,
                partition,
                offset: message.offset,
                value: message.value.toString(),
            })
        }
    })
}

function createInvoice(message) {
    console.log(message)
    return true;
}

run().catch((error) => console.log(error))
