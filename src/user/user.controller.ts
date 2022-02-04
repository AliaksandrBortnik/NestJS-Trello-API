import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {UserEntity} from "./entities/user.entity";

@Controller('users')
export class UserController {
  // constructor(private readonly userService: UserService) {}

  // // @Post()
  // // create(@Body() createUserDto: CreateUserDto) {
  // //   return this.userService.create(createUserDto);
  // // }
  // /**
  //  * Add a user and send the created user as a response with 201 status.
  //  */
  // @Post()
  // async add(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
  //   // const user: User = await this.userService.addOrUpdate(createUserDto);
  //   // this.res.status(StatusCodes.CREATED).send(user);
  //   const user: UserEntity = await this.userService.addOrUpdate(createUserDto);
  //   return user;
  // }
  //
  // // @Get()
  // // findAll() {
  // //   return this.userService.findAll();
  // // }
  // /**
  //  * Get all users and send users as a response with 200 status.
  //  */
  // @Get()
  // async getAll(): Promise<UserEntity[]> {
  //   const users: UserEntity[] = await this.userService.getAll();
  //   // this.res.code(StatusCodes.OK).send(users);
  //   return users;
  // }
  //
  // // @Get(':id')
  // // findOne(@Param('id') id: string) {
  // //   return this.userService.findOne(+id);
  // // }
  // /**
  //  * Get a user by ID and send the user as a response with 200 status if found.
  //  * Otherwise, send 404 response
  //  */
  // @Get(':id')
  // async getById(@Param('id') userId: string): Promise<UserEntity> {
  //   const user: UserEntity | undefined = await this.userService.getById(userId);
  //
  //   if (!user) {
  //     this.res.code(StatusCodes.NOT_FOUND).send({ message: 'Not Found' });
  //     return;
  //   }
  //
  //   // this.res.code(StatusCodes.OK).send(user);
  //   return user;
  // }
  //
  // // @Patch(':id')
  // // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  // //   return this.userService.update(+id, updateUserDto);
  // // }
  // /**
  //  * Update a user and send the updated user as a response with 200 status if found.
  //  * Otherwise, send 404 response.
  //  */
  // @Put(':id')
  // async update(@Param('id') userId: string, @Body() updatedUserDto: UpdateUserDto): Promise<UserEntity> {
  //   const userExists = !!(await this.userService.getById(userId));
  //
  //   if (!userExists) {
  //     this.res.code(StatusCodes.NOT_FOUND).send({ message: 'Not Found' });
  //     return;
  //   }
  //
  //   if (userId !== this.req.body.id && this.req.body.id !== null) {
  //     this.res.code(StatusCodes.BAD_REQUEST).send({ message: 'Mismatch of id' });
  //     return;
  //   }
  //
  //   const user: UserEntity = await this.userService.addOrUpdate(updatedUserDto);
  //   // this.res.code(StatusCodes.OK).send(user);
  //   return user;
  // }
  //
  // // @Delete(':id')
  // // remove(@Param('id') id: string) {
  // //   return this.userService.remove(+id);
  // // }
  // /**
  //  * Remove a user and send a response with 204 status if found.
  //  * Otherwise, send 404 response.
  //  */
  // @Delete(':id')
  // async remove(@Param('id') userId: string): Promise<void> {
  //   const userExists = !!(await this.userService.getById(userId));
  //
  //   if (!userExists) {
  //     this.res.code(StatusCodes.NOT_FOUND).send({ message: 'Not Found' });
  //     return;
  //   }
  //
  //   await this.userService.remove(userId);
  //   // this.res.code(StatusCodes.NO_CONTENT);
  // }
}
