import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getUsers(): Promise<string> {
    return 'List users from service';
  }
}
