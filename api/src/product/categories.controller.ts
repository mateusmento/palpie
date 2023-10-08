import { Body, Controller, Get, Post } from '@nestjs/common';
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
  findAll() {
    return this.categoryRepo.find();
  }

  @Post()
  create(@Body() data: any) {
    return this.categoryRepo.save(data);
  }
}
