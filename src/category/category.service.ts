import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './categoryDto';
import { CategoryORM } from './categoryORM';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryORM)
        private categoryReposytory: Repository<CategoryORM>
    ) {}

    getAll(): Promise<CategoryORM[]> {
        return this.categoryReposytory.find()
    }

    getOne(id: number): Promise<CategoryORM | null> {
        return this.categoryReposytory.findOneBy({id})
    }

    create(categoryDto: CategoryDto) {
        return this.categoryReposytory.save(categoryDto)
    }

    async delete(id: number): Promise<void> {
        await this.categoryReposytory.delete(id)
    }

    async update(id: number, categoryDto: CategoryDto) {
        await this.categoryReposytory.update(id, categoryDto)
    }
}
