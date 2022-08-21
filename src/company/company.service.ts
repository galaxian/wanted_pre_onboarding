import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
    constructor( 
        @InjectRepository(Company)
        private companyRepository: Repository<Company>,
    ) {}

    async getCompany(companyName: string): Promise<Company> {
        const found = await this.companyRepository.findOneBy({companyName});

        if(!found) {
            throw new NotFoundException(`${companyName} 회사가 존재하지 않습니다.`);
        }

        return found;
    }
}
