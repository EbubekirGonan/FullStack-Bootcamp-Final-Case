import { Kafka } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'my-kafka-producer',
    brokers: ['kafka:9092']
})

const producer = kafka.producer();

const connectProducer = async () => {
    await producer.connect();
    console.log('Kafka Producer connected');
}

connectProducer();

const sendMessage = async (topic, message) => {
    try {
        await producer.send({
            topic: topic,
            messages: [{ value: message }],
        });
        console.log(`Message sent to ${topic}`);
    } catch (error) {
        console.error('Failed to send message:', error);
    }
}

// async function sendMessage(topic, message) {
//     await producer.connect()
//     await producer.send({
//         topic: topic,
//         messages: [
//             {value: message},
//         ],
//     })
// }

export default { sendMessage }