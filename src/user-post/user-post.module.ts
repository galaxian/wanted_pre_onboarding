import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPost } from './user-post.entity';
import { UserPostRepository } from './user-post.repository';
import { UserPostService } from './user-post.service';
import { UserPostController } from './user-post.controller';
import { PostModule } from 'src/post/post.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserPost]),
        PostModule,
        UserModule,
    ],
    controllers: [UserPostController],
    providers: [UserPostService],
})
export class UserPostModule {}
