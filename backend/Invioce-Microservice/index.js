import { Kafka } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'my-kafka-producer',
    brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ 
    groupId: 'my-kafka-producer',
    sessionTimeout: 30000,
    heartbeatInterval: 5000
});

const run = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic: 'invoice', fromBeginning: true })

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
