import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { CategoriesController } from './controllers/categories.controller';
import { CreateProductCommand } from './commands/create-product.command';
import { CreateCategoryCommand } from './commands/create-category.command';
import { FindProductsQuery } from './queries/find-products.query';
import { SearchCategoriesQuery } from './queries/search-categories.query';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductsController, CategoriesController],
  providers: [
    CreateProductCommand,
    CreateCategoryCommand,
    FindProductsQuery,
    SearchCategoriesQuery,
  ],
})
export class CatalogModule {}
