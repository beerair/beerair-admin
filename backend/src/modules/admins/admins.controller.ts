import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { Admin } from './admin.entity';
import { AdminsService } from './admins.service';

@Controller('admins')
@ApiTags('Admin')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  @ApiOperation({ summary: '관리자 목록 조회' })
  async findAll(): Promise<Admin[]> {
    return await this.adminsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 관리자 조회' })
  async findOne(@Param('id') id: string): Promise<Admin> {
    return await this.adminsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: '특정 관리자 삭제' })
  async remove(@Param('id') id: string): Promise<void> {
    return await this.adminsService.remove(id);
  }
}
