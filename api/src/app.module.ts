import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'palpie',
      username: 'palpie',
      password: 'palpie',
      logging: 'all',
      logger: 'advanced-console',
      autoLoadEntities: true,
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
