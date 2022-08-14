import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './categoryDto';
import { CategoryORM } from './categoryORM';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryORM)
        private categoryRepository: Repository<CategoryORM>
    ) {}

    getAll(): Promise<CategoryORM[]> {
        return this.categoryRepository.find()
    }

    getOne(id: number): Promise<CategoryORM | null> {
        return this.categoryRepository.findOneBy({id})
    }

    create(categoryDto: CategoryDto) {
        return this.categoryRepository.save(categoryDto)
    }

    async delete(id: number): Promise<void> {
        await this.categoryRepository.delete(id)
    }

    async update(id: number, categoryDto: CategoryDto) {
        await this.categoryRepository.update(id, categoryDto)
    }
}
