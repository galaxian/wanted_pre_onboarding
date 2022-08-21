import { Company } from "src/company/company.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GetDetailPostDto } from "./dto/getDetailPostDto";
import { GetPostDto } from "./dto/getPostDto";

@Entity()
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    position: string;

    @Column()
    price: number;

    @Column()
    content: string;

    @Column()
    language: string;

    @ManyToOne(type => Company, company => company.posts, {eager: true})
    company: Company;

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