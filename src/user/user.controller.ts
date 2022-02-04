import {Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, Res, HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserEntity} from "./entities/user.entity";
import {Response} from 'express'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Add a user and send the created user as a response with 201 status.
   */
  @Post() // Returns 201 by default of Nest
  // TODO: use DTO objects instead of domain model
  // async add(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
  async add(@Body() userEntity: UserEntity): Promise<UserEntity> {
    const user =  await this.userService.addOrUpdate(userEntity);
    return user;
  }

  /**
   * Get all users and send users as a response with 200 status.
   */
  @Get()
  async getAll(): Promise<UserEntity[]> {
    const users: UserEntity[] = await this.userService.getAll();
    return users;
  }

  /**
   * Get a user by ID and send the user as a response with 200 status if found.
   * Otherwise, send 404 response
   */
  @Get(':id')
  async getById(@Param('id') userId: string, @Res() res: Response): Promise<UserEntity | undefined> {
    const user: UserEntity | undefined = await this.userService.getById(userId);

    if (!user) {
      res.status(HttpStatus.NOT_FOUND).send();
      return;
    }

    res.status(HttpStatus.OK).send(user);
  }

  /**
   * Update a user and send the updated user as a response with 200 status if found.
   * Otherwise, send 404 response.
   */
  @Put(':id')
  // TODO: use DTO instead of domain model
  // async update(@Param('id') userId: string, @Body() updatedUserDto: UpdateUserDto): Promise<void> {
  async update(@Param('id') userId: string, @Body() userEntity: UserEntity, @Res() res: Response): Promise<void> {
    if (userId !== userEntity.id && userEntity.id !== null) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: 'Mismatch of id' });
      return;
    }

    const userExists = !!(await this.userService.getById(userId));

    if (!userExists) {
      res.status(HttpStatus.NOT_FOUND).send();
      return;
    }

    const user: UserEntity = await this.userService.addOrUpdate(userEntity);
    res.status(HttpStatus.OK).send(user);
  }

  /**
   * Remove a user and send a response with 204 status if found. Otherwise, send 404 response.
   */
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') userId: string, @Res({ passthrough: true }) res: Response): Promise<void> {
    const userExists = !!(await this.userService.getById(userId));

    if (!userExists) {
      res.status(HttpStatus.NOT_FOUND).send(); // TODO: review. probably works only for express
      return;
    }

    await this.userService.remove(userId);
  }
}
