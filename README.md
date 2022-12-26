## Ignite Lab #04 da Rocketseat

### Rascunhos

- `yarn global add @nestjs/cli`
- `npm install -g @nestjs/cli`
- `nest -h`

> // Inversão de Dependência => SOLID<br/>
> // Injeção de Dependência => precisa ter o Decorator @Injectable()

- `npm i prisma -D`
- `npm i @prisma/client`
- `npx prisma init --datasource-provider SQLite`
- `npx prisma migrate dev`
- `npx prisma studio`

- `npm i class-validator class-transformer`

### AULA 2

> // Tudo que é de camada externa, fica em "infra", exemplos: bd, http, outras apis, etc...

- `yarn test:cov`

### AULA 3

- `npx tsc --noEmit` // checagem de erros typescript

- `npm run test:watch` // conferir os testes

### AULA FINAL (Extra - Mensageria Kafka)

- `npm i @nestjs/microservices`
- `npm i kafkajs`

> Obs: para rodar o Producer, basta executar o comando dentro de `doc/kafka-producer`...
- `node producer.js`

- Repositório da Rocketseat: `https://github.com/rocketseat-education/ignite-lab-nodejs`
