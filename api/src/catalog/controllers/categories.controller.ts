import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SearchCategories } from '../queries/search-categories.query';
import { CreateCategory } from '../commands/create-category.command';

@Controller('categories')
export class CategoriesController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus
  ) {}

  @Get()
  findAll(@Query() query: SearchCategories) {
    return this.queryBus.execute(query);
  }

  @Post()
  create(@Body() command: CreateCategory) {
    return this.commandBus.execute(command);
  }
}
