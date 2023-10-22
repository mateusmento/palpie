import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductAvailability } from '../entities/product-availability.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCreatedListener {
  constructor(
    @InjectRepository(ProductAvailability)
    private availabilityRepo: Repository<ProductAvailability>
  ) {}

  @OnEvent('product.created')
  async handle(data: any) {
    this.availabilityRepo.save({
      id: data.id,
      availability: 0,
    });
  }
}
