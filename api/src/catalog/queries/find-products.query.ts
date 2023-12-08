import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { IsNumber, IsOptional } from 'class-validator';

export class FindProducts {
  @IsNumber()
  @IsOptional()
  categoryId?: number;
}

@QueryHandler(FindProducts)
export class FindProductsQuery implements IQueryHandler<FindProducts> {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>
  ) {}

  async execute({ categoryId }: FindProducts) {
    let qb = this.productRepo.createQueryBuilder('product');
    qb.leftJoinAndSelect('product.categories', 'c');

    if (categoryId) {
      qb = qb
        .leftJoin('product.categories', 'category')
        .where('category.id = :categoryId', { categoryId });
    }

    return qb.getMany();
  }
}
