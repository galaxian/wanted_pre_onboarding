import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { Posts } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Post()
    createPost(@Body() createPostDto: CreatePostDto): Promise <Posts> {
        return this.postService.createPost(createPostDto)
    }

    @Patch("/:id")
    updatePost(@Param("id") id: number , @Body() updatePostDto: UpdatePostDto): Promise <Posts> {
        return this.postService.updatePost(id, updatePostDto)
    }

    @Delete("/:id")
    deletePost(@Param("id") id: number): Promise<void> {
        return this.postService.deletePost(id);
    }

    @Get()
    getAllPosts(): Promise<Posts[]> {
        return this.postService.getAllPosts();
    }
}
