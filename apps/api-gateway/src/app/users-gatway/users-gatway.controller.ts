import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users-gatway')
export class UsersGatwayController {
  constructor(
    @Inject('USERS_SERVICE')
    private usersServiceClient: ClientProxy,
  ) {}

  @Post('users')
  getUsers(@Body() users: any) {
    return this.usersServiceClient.send('get_users', users);
  }
}
