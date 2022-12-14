import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderORM } from './order.ORM';
import { OrderProductsORM } from './order.products.ORM';
import { ProductORM } from 'src/product/productORM';
import { ProductService } from 'src/product/product.service';
import { CategoryService } from 'src/category/category.service';
import { CategoryORM } from 'src/category/categoryORM';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[TypeOrmModule.forFeature([OrderORM, OrderProductsORM, ProductORM, CategoryORM]), AuthModule],
  providers: [OrderService, ProductService, CategoryService, JwtStrategy],
  controllers: [OrderController]
})
export class OrderModule {}
