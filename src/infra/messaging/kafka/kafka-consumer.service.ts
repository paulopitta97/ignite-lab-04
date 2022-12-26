import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {

    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['********************************************'],
                sasl: {
                    mechanism: '********************************************',
                    username: '********************************************',
                    password: '********************************************',
                },
                ssl: true,
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
    }

}