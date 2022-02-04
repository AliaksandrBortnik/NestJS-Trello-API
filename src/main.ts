import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {config} from "./common/config";
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";

const PORT: string = config.PORT || '4000';

async function bootstrap() {
  // https://docs.nestjs.com/techniques/performance
  const app = config.USE_FASTIFY ?
    await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter()) :
    await NestFactory.create(AppModule);

  await app.listen(PORT, '0.0.0.0'); // TODO: review. is it fine for express 0.0.0.0?
  // TODO: log errors on listen
  // app.listen(PORT, '0.0.0.0').catch((error: unknown) => {
  //   if (error instanceof Error) {
  //     app.log.fatal(error.message);
  //     process.exit(1);
  //   }
  // });
}
bootstrap();
