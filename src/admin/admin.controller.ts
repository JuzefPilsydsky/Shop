import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './adminDto';

@Controller('admin')
export class AdminController {
    constructor(private adminSevrice: AdminService) {}

    @Get()
    getAll() {
        return this.adminSevrice.getAll();
    }

    @Get(':id')
    getOne(@Param() params) {
        return this.adminSevrice.getOne(params.id);
    }

    @Post('create')
    create(@Body() adminDto: AdminDto) {
        return this.adminSevrice.create(adminDto);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.adminSevrice.delete(params.id);
    }

    @Put(':id')
    async update(@Param() param, @Body() adminDto: AdminDto) {
        const response = await this.adminSevrice.update(param.id, adminDto);
        return response;
    }
}
