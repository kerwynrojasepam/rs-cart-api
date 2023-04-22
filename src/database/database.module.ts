import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { entities } from '../entities';
import { DATABASE } from '../config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DATABASE,
      entities,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    TypeOrmModule.forFeature(entities),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
