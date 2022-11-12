import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Admin } from './admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminsService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(Admin)
    private readonly usersRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const isExist = await this.findOne(createAdminDto.id);
    if (isExist) {
      throw new BadRequestException('이미 존재하는 아이디 입니다.');
    }

    const admin = new Admin();
    admin.id = createAdminDto.id;
    admin.name = createAdminDto.name;
    const encrypted = await bcrypt.hash(
      createAdminDto.password,
      bcrypt.genSaltSync(this.saltRounds),
    );
    admin.password = encrypted;

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
