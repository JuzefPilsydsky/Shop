import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './adminDto';
import { Role } from '../auth/role.enum';
import { Roles } from '../auth/roles.decorator';
import { JwtStrategy } from 'src/auth/jwt.strategy';


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

    @UseGuards(JwtStrategy)
    @Post('create')
    @Roles(Role.OWNER)
    create(@Body() adminDto: AdminDto) {
        return this.adminSevrice.create(adminDto);
    }

    @UseGuards(JwtStrategy)
    @Delete(':id')
    @Roles(Role.OWNER)
    delete(@Param() params) {
        return this.adminSevrice.delete(params.id);
    }

    @UseGuards(JwtStrategy)
    @Put(':id')
    @Roles(Role.OWNER)
    async update(@Param() param, @Body() adminDto: AdminDto) {
        const response = await this.adminSevrice.update(param.id, adminDto);
        return response;
    }
}
