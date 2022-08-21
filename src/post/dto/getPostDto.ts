import { Company } from "src/company/company.entity";

export class GetPostDto {
    id: number;
    position: string;
    price: number;
    language: string;
    company: Company
}