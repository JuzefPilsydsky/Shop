import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './productDto';

@Controller('product')
export class ProductController {
    constructor(private productServise: ProductService) {}

    @Get()
    getAll() {
        return this.productServise.getAll();
    }

    @Get(':id')
    getOne(@Param() param) {
        return this.productServise.getOne(param.id);
    }

    @Post('create')
    createProduct(@Body() productDto: ProductDto) {
        return this.productServise.create(productDto)
    }
    
    @Delete(':id')
    deleteOneById(@Param() param) {
        return this.productServise.delete(param.id)
    }

    @Put(':id')
    async updateOneById(@Body() productDto: ProductDto, @Param() param) {
        const response = await this.productServise.update(param.id, productDto);
        return response;
    }
}
