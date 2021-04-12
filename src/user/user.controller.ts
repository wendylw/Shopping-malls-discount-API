
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @Get()
  // async getUser(): Promise<User[] | null> {
  //   return await this.userService.findAll();
  // }

  @Get(':id')
  async getOneUser(@Param() user: { id: string }) {
    return await this.userService.findOne(user.id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  // @Put()
  // async update(user): Promise<void> {
  //   return await this.userService.update(user);
  // }
}