import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Category } from './category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductsController],
})
export class ProductModule {}
