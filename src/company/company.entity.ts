import { type } from "os";
import { Posts } from "src/post/post.entity";
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

    @OneToMany(type => Posts, posts => posts.company, {eager : false})
    posts: Posts[];

}