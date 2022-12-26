import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {

    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['mint-hyena-12994-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'bWludC1oeWVuYS0xMjk5NCSIH98NF3MlMfq_KH5u7e5Grqxk5VVVLl6RHbun494',
                    password: '863e8241ac6b45d59201c8d1e534559a',
                },
                ssl: true,
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
    }

}