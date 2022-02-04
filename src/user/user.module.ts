import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {userProviders} from "./user.providers";
import {UserEntity} from "./entities/user.entity";
import {DatabaseModule} from "../database/database.module";

@Module({
  // imports: [TypeOrmModule.forFeature([UserEntity])]],
  imports: [DatabaseModule],
  exports: [UserService],
  controllers: [UserController],
  providers: [
    ...userProviders,
    UserService
  ]
})
export class UserModule {}
