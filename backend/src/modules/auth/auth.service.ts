import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { AdminsService } from 'src/modules/admins/admins.service';
import { Admin } from '../admins/admin.entity';
import { CreateAdminDto } from '../admins/dto/create-admin.dto';
import { JwtPayload } from './strategies/jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private adminsService: AdminsService,
    private jwtService: JwtService,
  ) {}

  async validate(
    id: string,
    password: string,
  ): Promise<Omit<Admin, 'password'>> {
    const admin = await this.adminsService.findOne(id);
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (admin && isPasswordMatch) {
      const { password: _, ...result } = admin;
      return result;
    }
    return null;
  }

  async signup(createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  async login(admin: Omit<Admin, 'password'>) {
    const payload: JwtPayload = { id: admin.id, name: admin.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
