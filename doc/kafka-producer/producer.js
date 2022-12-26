import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
    const kafka = new Kafka({
        clientId: 'kafka-producer',
        brokers: ['mint-hyena-12994-us1-kafka.upstash.io:9092'],
        sasl: {
            mechanism: 'scram-sha-256',
            username: 'bWludC1oeWVuYS0xMjk5NCSIH98NF3MlMfq_KH5u7e5Grqxk5VVVLl6RHbun494',
            password: '863e8241ac6b45d59201c8d1e534559a',
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