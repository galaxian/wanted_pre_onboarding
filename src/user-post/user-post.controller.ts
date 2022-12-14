import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApplyPostDto } from 'src/post/dto/applyPostDto.dto';
import { UserPost } from './user-post.entity';
import { UserPostService } from './user-post.service';

@Controller('userpost')
export class UserPostController {
    constructor(private userPostService: UserPostService) {}

    @Post("/apply")
    @UsePipes(ValidationPipe)
    applyPost(@Body() applyPostDto: ApplyPostDto): Promise<UserPost> {
        return this.userPostService.applyPost(applyPostDto);
    }
}
