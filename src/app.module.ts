import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    CompanyModule]
})
export class AppModule {}
