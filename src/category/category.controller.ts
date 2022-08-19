import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
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

    @Post('create')
    @HttpCode(201)
    create(@Body() categoryDto: CategoryDto) {
        return this.categoryService.create(categoryDto);
    }

    @Delete(':id')
    @HttpCode(200)
    delete(@Param() param) {
        return this.categoryService.delete(param.id);
    }

    @Put(':id')
    @HttpCode(201)
    async update(@Body() categoryDto: CategoryDto, @Param() param) {
        const update = await this.categoryService.update(param.id, categoryDto);
        return update;
    }
}
