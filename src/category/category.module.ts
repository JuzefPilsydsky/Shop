import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryORM } from './categoryORM';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryORM])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
