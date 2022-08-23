import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserPost } from "./user-post.entity";

@Injectable()
export class UserPostRepository {
    constructor(
        @InjectRepository(UserPost)
        private userPostRepository: Repository<UserPost>,
    ) {}
}