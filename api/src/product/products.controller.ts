import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  products = [];

  @Get()
  findAll() {
    return this.products;
  }

  @Post()
  create(@Body() data: any) {
    data.id = this.products.map((p) => p.id).reduce((a, b) => Math.max(a, b), 0) + 1;
    this.products.push(data);
    return data;
  }
}
