import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admin } from './admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly usersRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = createAdminDto.toAdminEntity();

    const isExist = await this.findOne(admin.id);
    if (isExist) {
      throw new BadRequestException('이미 존재하는 아이디 입니다.');
    }

    return this.usersRepository.save(admin);
  }

  async findAll(): Promise<Admin[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<Admin> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
