import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyService } from 'src/company/company.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { Posts } from './post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Posts)
        private postRepository: Repository<Posts>,
        private companyService: CompanyService,
    ) {
    }

    async createPost(createPostDto: CreatePostDto): Promise <Posts>{
        const {position, price, content, language, companyName} = createPostDto;

        const company = await this.companyService.getCompany(companyName);

        const posts = await this.postRepository.create({
            position,
            price,
            content,
            language,
            company
        })

        await this.postRepository.save(posts);
        return posts;
    }

    async updatePost(id: number, updatePostDto: UpdatePostDto): Promise<Posts> {
        const posts = await this.getPostById(id);

        posts.position = updatePostDto.position;
        posts.price = updatePostDto.price;
        posts.content = updatePostDto.content;
        posts.language = updatePostDto.language;

        await this.postRepository.save(posts);

        return posts
    }

    async getPostById(id: number): Promise<Posts> {
        const found = await this.postRepository.findOneBy({id});

        if(!found) {
            throw new NotFoundException(`${id}번 채용공고가 존재하지 않습니다.`);
        }

        return found;
    }

    async deletePost(id: number): Promise<void> {
        const posts = await this.postRepository.delete(id);

        if(posts.affected === 0) {
            throw new NotFoundException(`${id}번 채용공고가 존재하지 않습니다.`);
        }
    }

    async getAllPosts(): Promise<Posts[]> {
        return await this.postRepository.find();
    }
}
