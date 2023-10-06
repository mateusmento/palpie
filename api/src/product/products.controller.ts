import { Body, Controller, Get, Post } from '@nestjs/common';
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
  findAll() {
    return this.productRepo.find();
  }

  @Post()
  create(@Body() data: any) {
    return this.productRepo.save(data);
  }
}
