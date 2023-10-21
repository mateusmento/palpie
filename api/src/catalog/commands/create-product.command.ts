import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

export class CreateProduct {
  title: string;
}

@CommandHandler(CreateProduct)
export class CreateProductHandler implements ICommandHandler<CreateProduct> {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    private emitter: EventEmitter2
  ) {}

  async execute(data: CreateProduct) {
    const product = this.productRepo.save(data);
    await this.emitter.emitAsync('product.created', product);
    return product;
  }
}
