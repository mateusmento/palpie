import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleProduct } from './entities/sale-product.entity';
import { Order, OrderItem } from './entities/order.entity';
import { CreateOrderCommand } from './commands/create-order.command';
import { ProductCreatedListener } from './listeners/product-created.listener';

@Module({
  imports: [TypeOrmModule.forFeature([SaleProduct, Order, OrderItem])],
  providers: [CreateOrderCommand, ProductCreatedListener],
})
export class SalesModule {}
