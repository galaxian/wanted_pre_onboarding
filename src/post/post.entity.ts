import { Company } from "src/company/company.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

}