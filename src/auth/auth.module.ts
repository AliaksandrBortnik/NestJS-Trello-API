import {Module} from '@nestjs/common';
import {JwtModule} from "@nestjs/jwt";
import {AuthController} from "./auth.controller";
import {UserModule} from "../user/user.module";
import {config} from "../common/config";

@Module({
  imports: [
    UserModule,
    JwtModule.register(({
      secret: config.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' }
    }))
  ],
  controllers: [AuthController]
})
export class AuthModule {}
