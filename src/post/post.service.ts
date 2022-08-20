import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
import { Posts } from './post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Posts)
        private postRepository: Repository<Posts>,
    ) {
    }

    async createPost(createPostDto: CreatePostDto): Promise <Posts>{
        const {position, price, content, language, companyName} = createPostDto;

        const posts = this.postRepository.create({
            position,
            price,
            content,
            language,
            companyName
        })

        await this.postRepository.save(posts);
        return posts;
    }
}
