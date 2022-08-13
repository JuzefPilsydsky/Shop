import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Repository } from 'typeorm';
import { ProductDto } from './productDto';
import { ProductORM } from './productORM';

@Injectable()
export class ProductService {constructor(
    @InjectRepository(ProductORM)
    private productReposytory: Repository<ProductORM>,
    
    @Inject(CategoryService)
    private categoryService: CategoryService
) {}

getAll(): Promise<ProductORM[]> {
    return this.productReposytory.find();
}

getOne( id: number ): Promise<ProductORM> {
    return this.productReposytory.findOneBy({id})
}

async create(productDto: ProductDto) {
    const category = await this.categoryService.getOne(productDto.categoryId.id)

    if (category == null) {
        throw new Error()
    }

    return this.productReposytory.save({
        ...productDto,
        categoryId: category
    })
}

async delete( id: number ): Promise<void> {
    await this.productReposytory.delete(id)
}

async update(id: number, productDto: ProductDto) {
    await this.productReposytory.update(id, productDto)
}}
