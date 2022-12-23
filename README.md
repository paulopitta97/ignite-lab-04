## Ignite Lab #04 da Rocketseat

### Comandos / Rascunhos

yarn global add @nestjs/cli
npm install -g @nestjs/cli

nest -h

// Inversão de Dependência => SOLID
// Injeção de Dependência => precisa ter o Decorator @Injectable()

npm i prisma -D
npm i @prisma/client
npx prisma init --datasource-provider SQLite
npx prisma migrate dev
npx prisma studio

npm i class-validator class-transformer