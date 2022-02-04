import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {Column} from "typeorm";

// export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class UpdateUserDto {
  id: string;
  name: string;
  login: string;
  password: string;
}
