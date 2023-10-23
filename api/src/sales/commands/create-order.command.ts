import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';

export class OrderItemDto {
  productId: number;
  quantity: number;
}

export class CreateOrder {
  items: OrderItemDto[];
}

@CommandHandler(CreateOrder)
export class CreateOrderCommand implements ICommandHandler<CreateOrder> {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>
  ) {}

  async execute({ items }: CreateOrder) {
    return this.orderRepo.save({ items });
  }
}
