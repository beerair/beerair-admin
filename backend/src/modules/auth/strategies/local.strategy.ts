import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { Admin } from 'src/modules/admins/admin.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'id',
      passwordField: 'password',
      passReqToCallback: false,
    });
  }

  async validate(
    id: string,
    password: string,
  ): Promise<Omit<Admin, 'password'>> {
    const admin = await this.authService.validate(id, password);
    if (!admin) {
      throw new UnauthorizedException();
    }
    return admin;
  }
}
