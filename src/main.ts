import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {config} from "./common/config";

const PORT: string = config.PORT || '4000';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  await app.listen(PORT);
}
bootstrap();
