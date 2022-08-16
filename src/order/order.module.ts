import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderORM } from './order.ORM';
import { ListOfProductsORM } from './list.of.products.ORM';

@Module({
  imports:[TypeOrmModule.forFeature([OrderORM,ListOfProductsORM])],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
