import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { Posts } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Post()
    createPost(@Body() createPostDto: CreatePostDto): Promise <Posts> {
        return this.postService.createPost(createPostDto)
    }
}
