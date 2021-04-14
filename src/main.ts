import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Advanced backend for SPA-websites')
    .setDescription('Backend Service API documentation')
    .setVersion('1.0.0')
    .addTag('Create and Get users from database')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(process.env.APP_PORT, () => {
    console.log(`Server up`);
  });
}

start();
