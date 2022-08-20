import { Company } from "src/company/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
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

    @ManyToOne(type => Company, company => company.posts, {eager: false})
    company: Company;

}