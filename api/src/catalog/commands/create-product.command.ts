import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Allow } from 'class-validator';

export class CreateProduct {
  @Allow()
  title: string;
  @Allow()
  price: number;
  @Allow()
  quantity: number;
  @Allow()
  categories: any[];
}

@CommandHandler(CreateProduct)
export class CreateProductCommand implements ICommandHandler<CreateProduct> {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    private emitter: EventEmitter2
  ) {}

  async execute(data: CreateProduct) {
    console.log(data);
    const product = await this.productRepo.save(data);
    await this.emitter.emitAsync('product.created', product);
    return product;
  }
}
