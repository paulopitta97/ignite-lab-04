import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'kafka-producer',
        brokers: ['********************************************'],
        sasl: {
            mechanism: '********************************************',
            username: '********************************************',
            password: '********************************************',
        },
        ssl: true,
    });

    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
        topic: 'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    content: 'Nova solicitação de amizade.',
                    category: 'Social',
                    recipientId: randomUUID(),
                })
            }
        ],
    });

    await producer.disconnect();
}

bootstrap();