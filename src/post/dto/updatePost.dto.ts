import { IsNumber, IsString } from "class-validator";

export class UpdatePostDto {
    @IsString()
    position: string;

    @IsNumber()
    price: number;

    @IsString()
    content: string;

    @IsString()
    language: string;
}