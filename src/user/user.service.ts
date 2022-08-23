import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getUserById(userId: number): Promise<User> {
        const found = await this.userRepository.findOneBy({id: userId});

        if(!found) {
            throw new NotFoundException(`${userId}번 사용자가 존재하지 않습니다.`);
        }

        return found;
    }
}
