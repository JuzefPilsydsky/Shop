import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './categoryDto';

@Controller('category')
export class CategoryController {
    constructor(private categoryServise: CategoryService) {}

    @Get()
    getAll() {
        return this.categoryServise.getAll()
    }

    @Get(':id')
    getOne(@Param() param) {
        return this.categoryServise.getOne(param.id)
    }

    @Post('create')
    @HttpCode(201)
    create(@Body() categoryDto: CategoryDto) {
        return this.categoryServise.create(categoryDto)
    }

    @Delete(':id')
    @HttpCode(200)
    delete(@Param() param) {
        return this.categoryServise.delete(param.id)
    }

    @Put(':id')
    @HttpCode(201)
    async update(@Body() categoryDto: CategoryDto, @Param() param) {
        const update = await this.categoryServise.update(param.id, categoryDto);
        return update
    }
}
