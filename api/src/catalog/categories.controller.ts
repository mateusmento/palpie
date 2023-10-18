import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoriesController {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) {}

  @Get()
  findAll(@Query() { name }: any) {
    let qb = this.categoryRepo.createQueryBuilder('category');
    if (name) {
      qb = qb.where('lower(category.name) like :query', { query: `%${name.toLowerCase()}%` });
    }
    return qb.getMany();
  }

  @Post()
  create(@Body() data: any) {
    return this.categoryRepo.save(data);
  }
}
