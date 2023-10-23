import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleProduct } from './entities/sale-product.entity';
import { Order, OrderItem } from './entities/order.entity';
import { CreateOrderCommand } from './commands/create-order.command';

@Module({
  imports: [TypeOrmModule.forFeature([SaleProduct, Order, OrderItem])],
  providers: [CreateOrderCommand],
})
export class SalesModule {}
