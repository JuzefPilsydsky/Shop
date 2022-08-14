import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminORM } from './adminORM';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminORM])
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
