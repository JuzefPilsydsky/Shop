import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductORM } from './productORM';
import { CategoryService } from 'src/category/category.service';
import { CategoryORM } from 'src/category/categoryORM';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AdminService } from 'src/admin/admin.service';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductORM, CategoryORM]),
    AuthModule,
  ],
  providers: [ProductService, CategoryService,],
  controllers: [ProductController]
})
export class ProductModule {}
