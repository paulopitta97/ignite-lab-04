## Ignite Lab #04 da Rocketseat

### Comandos / Rascunhos

- `yarn global add @nestjs/cli`
- `npm install -g @nestjs/cli`

- `nest -h`

// Inversão de Dependência => SOLID
// Injeção de Dependência => precisa ter o Decorator @Injectable()

- `npm i prisma -D`
- `npm i @prisma/client`
- `npx prisma init --datasource-provider SQLite`
- `npx prisma migrate dev`
- `npx prisma studio`

- `npm i class-validator class-transformer`

### AULA 2

// tudo que é camada externa, fica em infra - bd - http - outras apis, etc

- `yarn test:cov`

### AULA 3

- `npx tsc --noEmit` // checagem de erros typescript

- `npm run test:watch` // conferir os testes

### AULA FINAL

- `npm i @nestjs/microservices`
- `npm i kafkajs`

- Obs: para rodar o Producer (basta roda o `node producer.js` dentro de `doc/kafka-producer`)