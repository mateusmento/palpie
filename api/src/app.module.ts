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
      host: process.env.PALPIE_POSTGRES_HOST,
      port: +process.env.PALPIE_POSTGRES_PORT,
      database: process.env.PALPIE_POSTGRES_DATABASE,
      username: process.env.PALPIE_POSTGRES_USERNAME,
      password: process.env.PALPIE_POSTGRES_PASSWORD,
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
