import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { QueryBus } from '@nestjs/cqrs';
import { SearchCategories } from '../queries/search-categories.query';

@Controller('categories')
export class CategoriesController {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
    private queryBus: QueryBus
  ) {}

  @Get()
  findAll(@Query() query: SearchCategories) {
    return this.queryBus.execute(query);
  }

  @Post()
  create(@Body() data: any) {
    return this.categoryRepo.save(data);
  }
}
