import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplyPostDto } from 'src/post/dto/applyPostDto.dto';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { UserPost } from './user-post.entity';

@Injectable()
export class UserPostService {
    constructor(
        @InjectRepository(UserPost)
        private userPostRepositoy: Repository<UserPost>,
        private userService: UserService,
        private postService: PostService,
    ) {}

    async applyPost(applyPostDto: ApplyPostDto): Promise<UserPost> {
        const {userId, postId} = applyPostDto;

        const findUser = await this.userService.getUserById(userId);
        const findPost = await this.postService.getPostById(postId);

        if(!findPost) {
            throw new NotFoundException(`${postId}번 채용공고가 존재하지 않습니다.`);
        }

        const userPost: UserPost = await this.userPostRepositoy.create({
            user: findUser,
            posts: findPost
        });

        await this.userPostRepositoy.save(userPost);
        
        return userPost;
    }
}
