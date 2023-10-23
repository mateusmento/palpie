import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductAvailability } from '../entities/product-availability.entity';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';

export class AdjustAvailability {
  id: number;
  adjustment: number;
}

export class AvailabilityAdjusted {
  id: number;
  quantity: number;
  adjustment: number;
}

@CommandHandler(AdjustAvailability)
export class AdjustAvailabilityCommand implements ICommandHandler<AdjustAvailability> {
  constructor(
    @InjectRepository(ProductAvailability)
    private availabilityRepo: Repository<ProductAvailability>,
    private emitter: EventEmitter2
  ) {}

  async execute({ id, adjustment }: AdjustAvailability) {
    const availability = await this.availabilityRepo.findOneBy({ id });
    availability.quantity += adjustment;
    this.availabilityRepo.save(availability);
    this.emitter.emitAsync('availability.adjusted', {
      id,
      adjustment,
      quantity: availability.quantity,
    });
  }
}
