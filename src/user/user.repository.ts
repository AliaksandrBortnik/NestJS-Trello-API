import { UserEntity } from "./entities/user.entity";
import {EntityRepository, Repository} from "typeorm";
import bcryptjs from "bcryptjs";
import {Injectable} from "@nestjs/common";

/**
 * User's repository to work with DB
 */
@Injectable()
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async authenticate(login: string, password: string): Promise<string | null> {
    const user = await this.findOne({ where: { login }});

    if (!user || !bcryptjs.compareSync(password, user.password)) {
      return null;
    }

    return user.id;
  }
}