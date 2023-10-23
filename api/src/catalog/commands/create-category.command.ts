import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';

export class CreateCategory {
  name: string;
}

@CommandHandler(CreateCategory)
export class CreateCategoryCommand implements ICommandHandler<CreateCategory> {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) {}

  async execute(command: CreateCategory) {
    return this.categoryRepo.save(command);
  }
}
