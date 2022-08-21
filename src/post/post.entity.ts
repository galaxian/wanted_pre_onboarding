import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    companyName: string;

}