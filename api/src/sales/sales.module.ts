import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleProduct } from './entities/sale-product.entity';
import { Order, OrderItem } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleProduct, Order, OrderItem])],
})
export class SalesModule {}
