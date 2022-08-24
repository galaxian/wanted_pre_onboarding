import { IsNumber, IsString } from "class-validator";
import { Company } from "src/company/company.entity";
import { UserPost } from "src/user-post/user-post.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GetDetailPostDto } from "./dto/getDetailPostDto";
import { GetPostDto } from "./dto/getPostDto";

@Entity()
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn()
    @IsNumber()
    id: number;

    @Column()
    @IsString()
    position: string;

    @Column()
    @IsNumber()
    price: number;

    @Column()
    @IsString()
    content: string;

    @Column()
    @IsString()
    language: string;

    @ManyToOne(type => Company, company => company.posts, {eager: true})
    company: Company;

    @OneToMany(type => UserPost, userPost => userPost.posts, {eager: false})
    userPost: UserPost[];

    toGetPostDto(): GetPostDto {
        const dto = new GetPostDto();
        dto.company = this.company;
        dto.id = this.id;
        dto.position = this.position;
        dto.price = this.price;
        dto.language = this.language;
        return dto
    }

    toDetailPostDto(postList: number[]): GetDetailPostDto {
        const dto = new GetDetailPostDto();
        dto.company = this.company;
        dto.id = this.id;
        dto.position = this.position;
        dto.price = this.price;
        dto.language = this.language;
        dto.postList = postList;
        return dto
    }

}