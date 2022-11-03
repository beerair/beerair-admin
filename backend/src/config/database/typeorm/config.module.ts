import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './config.service';

@Module({
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class TypeOrmConfigModule {}
