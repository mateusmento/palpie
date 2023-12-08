import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { InventoryModule } from './inventory/inventory.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: 'localhost',
      host: 'ec2-15-228-8-11.sa-east-1.compute.amazonaws.com',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      logging: 'all',
      logger: 'advanced-console',
      autoLoadEntities: true,
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    EventEmitterModule.forRoot(),
    CatalogModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
