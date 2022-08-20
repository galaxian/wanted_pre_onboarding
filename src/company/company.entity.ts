import { Post } from "src/post/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    country: string;

    @Column()
    region: string;

    @OneToMany(type => Post, post => post.company, {eager: true})
    posts: Post[]

}