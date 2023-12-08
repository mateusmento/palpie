import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { IsOptional, IsString } from 'class-validator';

export class SearchCategories {
  @IsString()
  @IsOptional()
  name?: string;
}

@QueryHandler(SearchCategories)
export class SearchCategoriesQuery implements IQueryHandler<SearchCategories> {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) {}

  async execute({ name }: SearchCategories) {
    let qb = this.categoryRepo.createQueryBuilder('category');
    if (name) {
      qb = qb.where('lower(category.name) like :query', { query: `%${name.toLowerCase()}%` });
    }
    return qb.getMany();
  }
}
