import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { InventoryModule } from './inventory/inventory.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'sqlite',
        database: ':memory:',
        // type: 'postgres',
        // host: config.get('PALPIE_POSTGRES_HOST'),
        // port: +config.get('PALPIE_POSTGRES_PORT'),
        // database: config.get('PALPIE_POSTGRES_DATABASE'),
        // username: config.get('PALPIE_POSTGRES_USERNAME'),
        // password: config.get('PALPIE_POSTGRES_PASSWORD'),
        logging: 'all',
        logger: 'advanced-console',
        autoLoadEntities: true,
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
    CatalogModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
