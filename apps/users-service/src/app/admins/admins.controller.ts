import { Controller } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @MessagePattern('admins')
  getAdmins(): string {
    return 'Admin list from admins services';
  }
}
