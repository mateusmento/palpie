import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Controller('products')
export class ProductsController {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>
  ) {}

  @Get()
  findAll(@Query() { categoryId }: any) {
    let qb = this.productRepo.createQueryBuilder('product');
    if (categoryId) {
      qb = qb
        .leftJoin('product.categories', 'category')
        .where('category.id = :categoryId', { categoryId });
    }
    return qb.getMany();
  }

  @Post()
  create(@Body() data: any) {
    if (data.category) data.categories = [data.category];
    return this.productRepo.save(data);
  }
}
