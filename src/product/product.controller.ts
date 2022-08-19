import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './productDto';

@Controller('product')
export class ProductController {
    constructor(private productServiсe: ProductService) {}

    @Get()
    getAll() {
        return this.productServiсe.getAll();
    }

    @Get(':id')
    getOne(@Param() param) {
        return this.productServiсe.getOne(param.id);
    }

    @Post('create')
    create(@Body() productDto: ProductDto) {
        return this.productServiсe.create(productDto)
    }
    
    @Delete(':id')
    delete(@Param() param) {
        return this.productServiсe.delete(param.id)
    }

    @Put(':id')
    async update(@Body() productDto: ProductDto, @Param() param) {
        const response = await this.productServiсe.update(param.id, productDto);
        return response;
    }
}
