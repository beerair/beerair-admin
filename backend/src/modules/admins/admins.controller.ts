import { Controller, Delete, Get, Param } from '@nestjs/common';

import { Admin } from './admin.entity';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  async findAll(): Promise<Admin[]> {
    return await this.adminsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Admin> {
    return await this.adminsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.adminsService.remove(id);
  }
}
