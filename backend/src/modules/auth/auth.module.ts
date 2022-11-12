import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminsModule } from 'src/modules/admins/admins.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    AdminsModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: jwtConstants.secret,
        // TODO: temp expiresIn, 1day
        signOptions: { expiresIn: 60 * 60 * 24 },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
