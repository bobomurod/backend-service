import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT, () => {
    console.log(`Server up`);
  });
}

start();
