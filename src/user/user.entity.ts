import { IsNumber, IsString } from "class-validator";
import { UserPost } from "src/user-post/user-post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    @IsNumber()
    id:number;

    @Column()
    @IsString()
    username: string;

    @OneToMany(type => UserPost, userPost => userPost.user, {eager: false})
    userPost: UserPost[];
}