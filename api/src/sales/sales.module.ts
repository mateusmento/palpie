import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleProduct } from './entities/sale-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleProduct])],
})
export class SalesModule {}
