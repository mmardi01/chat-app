import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin:'http://localhost:3000',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({}));
  app.use(urlencoded({'extended':true}))
  await app.listen(3333);
}
bootstrap();
