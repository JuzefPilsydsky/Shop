import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { Role } from 'src/admin/role.enum';
import { Roles } from 'src/admin/roles.decorator';
import { OrderService } from './order.service';
import { OrderDto } from './orderDto';

@Controller('order')
export class OrderController {
    constructor (private orderService: OrderService) {}

    @Post('create')
    @HttpCode(201)
    create(@Body() orderDto: OrderDto) {
        return this.orderService.create(orderDto)
    }

    @Get(':id')
    getOne(@Param() param) {
        return this.orderService.getOne(param.id)
    }

    @Delete(':id')
    @Roles(Role.ADMIN, Role.MAIN_ADMIN)
    delete(@Param() param) {
        return this.orderService.delete(param.id)
    }
}
