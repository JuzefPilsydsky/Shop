import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductORM } from './productORM';
import { CategoryService } from 'src/category/category.service';
import { CategoryORM } from 'src/category/categoryORM';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductORM, CategoryORM])
  ],
  providers: [ProductService, CategoryService],
  controllers: [ProductController]
})
export class ProductModule {}
