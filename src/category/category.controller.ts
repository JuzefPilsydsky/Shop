import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { CategoryService } from './category.service';
import { CategoryDto } from './categoryDto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    getAll() {
        return this.categoryService.getAll();
    }

    @Get(':id')
    getOne(@Param() param) {
        return this.categoryService.getOne(param.id);
    }

    @UseGuards(JwtStrategy)
    @Post('create')
    @HttpCode(201)
    create(@Body() categoryDto: CategoryDto) {
        return this.categoryService.create(categoryDto);
    }

    @UseGuards(JwtStrategy)
    @Delete(':id')
    @HttpCode(200)
    delete(@Param() param) {
        return this.categoryService.delete(param.id);
    }

    @UseGuards(JwtStrategy)
    @Put(':id')
    @HttpCode(201)
    async update(@Body() categoryDto: CategoryDto, @Param() param) {
        const update = await this.categoryService.update(param.id, categoryDto);
        return update;
    }
}
