import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
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
}
