import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {BoardModule} from "./board/board.module";
import {TaskModule} from "./task/task.module";
import {DatabaseModule} from "./database/database.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  // imports: [TypeOrmModule.forRoot(), DatabaseModule, UserModule, BoardModule, TaskModule], // TODO: do we need DatabaseModule?
  imports: [DatabaseModule, UserModule, BoardModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
