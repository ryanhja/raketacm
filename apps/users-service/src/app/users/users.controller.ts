import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user')
  async getAllUser(): Promise<string> {
    let data = await this.usersService.getUsers();

    return data;
  }
}
