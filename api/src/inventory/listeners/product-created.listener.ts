import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Availability } from '../availability.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCreatedListener {
  constructor(
    @InjectRepository(Availability)
    private availabilityRepo: Repository<Availability>
  ) {}

  @OnEvent('product.created')
  async handle(data: any) {
    this.availabilityRepo.save({
      availability: 0,
      productId: data.id,
    });
  }
}
