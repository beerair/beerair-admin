import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AdminsModule } from 'src/modules/admins/admins.module';
import { AuthModule } from 'src/modules/auth/auth.module';

export const setUpSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('BeearAir Admin API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [AuthModule, AdminsModule],
  });
  SwaggerModule.setup('api', app, document);
};
