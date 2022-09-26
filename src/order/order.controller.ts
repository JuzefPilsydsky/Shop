import { Body, Controller, Delete, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/jwt.strategy';
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

    
    @UseGuards(JwtStrategy)
    @Delete(':id')
    delete(@Param() param) {
        return this.orderService.delete(param.id)
    }
}
