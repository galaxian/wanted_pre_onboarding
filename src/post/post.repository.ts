import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Posts } from "./post.entity";

@Injectable()
export class PostRepository {
    constructor(
        @InjectRepository(Posts)
        private postRepository: Repository<Posts>,
    ){}
}