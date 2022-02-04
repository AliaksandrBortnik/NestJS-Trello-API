import {JwtService} from '@nestjs/jwt';
import {Body, Controller, HttpCode, HttpStatus, Post, Res} from "@nestjs/common";
import {Response} from 'express';
import {UserService} from "../user/user.service";

/**
 * Class to handle all Auth's requests
 */
@Controller()
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  @Post('login')
  @HttpCode(200)
  async login(
    @Body() credentials: { login: string, password: string },
    @Res() res: Response
  ): Promise<void> {
    const { login, password } = credentials;
    const userId: string | null = await this.userService.findByCredentials(login, password);

    if (!userId) {
      res.status(HttpStatus.FORBIDDEN).send();
      return;
    }

    const token: string = await this.jwtService.signAsync({ login, userId });
    res.send({ token })
  }
}