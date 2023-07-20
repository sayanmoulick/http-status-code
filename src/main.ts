import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });
  await app.listen(3000);
}
bootstrap();
