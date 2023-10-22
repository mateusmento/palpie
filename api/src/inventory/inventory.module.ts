import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAvailability } from './entities/product-availability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAvailability])],
})
export class InventoryModule {}
