import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProduct } from '../commands/create-product.command';
import { FindProducts } from '../queries/find-products.query';

@Controller('products')
export class ProductsController {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus
  ) {}

  @Get()
  findAll(@Query() query: FindProducts) {
    return this.queryBus.execute(query);
  }

  @Post()
  create(@Body() command: CreateProduct) {
    return this.commandBus.execute(command);
  }
}
