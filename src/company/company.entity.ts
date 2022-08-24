import { IsNumber, IsString } from "class-validator";
import { type } from "os";
import { Posts } from "src/post/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;

    @Column()
    @IsString()
    companyName: string;

    @Column()
    @IsString()
    country: string;

    @Column()
    @IsString()
    region: string;

    @OneToMany(type => Posts, posts => posts.company, {eager : false})
    posts: Posts[];

}