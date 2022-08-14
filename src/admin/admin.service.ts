import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminDto } from './adminDto';
import { AdminORM } from './adminORM';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminORM)
        private adminRepository: Repository<AdminORM>
    ) {}

    getAll(): Promise<AdminORM[]> {
        return this.adminRepository.find();
    }

    getOne(id: number): Promise<AdminORM> {
        return this.adminRepository.findOneBy({id});
    }

    create(adminDto: AdminDto) {
        return this.adminRepository.save(adminDto);
    }

    async delete(id: number): Promise<void> {
        await this.adminRepository.delete(id);
    }

    async update(id: number, adminDto: AdminDto) {
        await this.adminRepository.update(id, adminDto);
    }

}
