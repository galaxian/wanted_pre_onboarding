import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { PostModule } from './post/post.module';
import { UserPostModule } from './user-post/user-post.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    CompanyModule,
    PostModule,
    UserPostModule]
})
export class AppModule {}
