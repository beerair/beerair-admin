import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseProviderModule } from './providers/database/provider.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
