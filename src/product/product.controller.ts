import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { JwtStrategy } from 'src/auth/jwt.strategy';
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

    @UseGuards(JwtStrategy)
    @Post('create')
    create(@Body() productDto: ProductDto) {
        return this.productServiсe.create(productDto)
    }
    
    @UseGuards(JwtStrategy)
    @Delete(':id')
    delete(@Param() param) {
        return this.productServiсe.delete(param.id)
    }

    @UseGuards(JwtStrategy)
    @Put(':id')
    async update(@Body() productDto: ProductDto, @Param() param) {
        const response = await this.productServiсe.update(param.id, productDto);
        return response;
    }
}
