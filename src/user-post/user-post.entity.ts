import { IsNumber } from "class-validator";
import { Posts } from "src/post/post.entity";
import { User } from "src/user/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserPost {
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;

    @ManyToOne(type => User, user => user.userPost, {eager: false})
    user: User;

    @ManyToOne(type => Posts, posts => posts.userPost, {eager: false})
    posts: Posts;
}