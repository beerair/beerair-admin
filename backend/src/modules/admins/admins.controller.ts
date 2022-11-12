import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { Admin } from './admin.entity';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return await this.adminsService.create(createAdminDto);
  }

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
