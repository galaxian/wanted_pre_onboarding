import { IsNotEmpty, IsNumber } from "class-validator";

export class ApplyPostDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    postId: number;
}