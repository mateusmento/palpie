import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleProduct } from '../entities/sale-product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCreatedListener {
  constructor(
    @InjectRepository(SaleProduct)
    private productRepo: Repository<SaleProduct>
  ) {}

  @OnEvent('product.created')
  async handle(data: any) {
    this.productRepo.save(data);
  }
}
