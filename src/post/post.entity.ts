import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class post {
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

}