import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users')
  async getAllUser(): Promise<string> {
    const data = await this.usersService.getUsers();

    return data;
  }
}
