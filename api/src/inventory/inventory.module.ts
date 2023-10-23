import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAvailability } from './entities/product-availability.entity';
import { AdjustAvailabilityCommand } from './commands/adjust-availability.command';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAvailability])],
  providers: [AdjustAvailabilityCommand],
})
export class InventoryModule {}
