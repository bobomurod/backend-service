import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUserByIdDto } from "./dto/get-user-by-id.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUser(dto: GetUserDto) {
    const user = await this.userRepository.findOne({ where: {id: dto.id , email: dto.email } });
    return user;
  }

  async getUserById(dto: GetUserByIdDto) {
    const user = await this.userRepository.findByPk(dto.id);
    return user;
  }

  async updateUser(dto: UpdateUserDto) {
    const updatedUser = this.userRepository.update(
      { email: dto.email },
      { where: { id: dto.id } },
    );
    return updatedUser;
  }
}
