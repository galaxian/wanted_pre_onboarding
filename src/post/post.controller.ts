import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { GetDetailPostDto } from './dto/getDetailPostDto';
import { GetPostDto } from './dto/getPostDto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { Posts } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createPost(@Body() createPostDto: CreatePostDto): Promise <Posts> {
        return this.postService.createPost(createPostDto)
    }

    @Patch("/:id")
    @UsePipes(ValidationPipe)
    updatePost(@Param("id") id: number , @Body() updatePostDto: UpdatePostDto): Promise <Posts> {
        return this.postService.updatePost(id, updatePostDto)
    }

    @Delete("/:id")
    deletePost(@Param("id", ParseIntPipe) id: number): Promise<void> {
        return this.postService.deletePost(id);
    }

    @Get()
    getAllPosts(): Promise<GetPostDto[]> {
        return this.postService.getAllPosts();
    }

    @Get("/:id")
    getPost(@Param("id", ParseIntPipe) id: number): Promise<GetDetailPostDto> {
        return this.postService.getPost(id);
    }

    @Get("/search/:word")
    searchPosts(@Param("word") word: string): Promise<GetPostDto[]> {
        return this.postService.searchPosts(word);
    }
}
