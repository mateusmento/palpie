import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ProductsController],
})
export class ProductModule {}
