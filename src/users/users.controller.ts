import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { GetUserByIdDto } from './dto/get-user-by-id.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  update(@Body() userDto: UpdateUserDto) {
    return this.usersService.updateUser(userDto);
  }

  @Get()
  getUser(@Body() userDto: GetUserDto) {
    return this.usersService.getUser(userDto);
  }

  @Get()
  getUserById(@Param('/:id') id: GetUserByIdDto) {
    return this.usersService.getUserById(id);
  }
}
