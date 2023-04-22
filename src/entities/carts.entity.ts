import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatusType } from '../typings/enum';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({ type: 'enum', enum: StatusType })
  status: StatusType;

  @Column({ type: 'date', nullable: false })
  createdAt: string;

  @Column({ type: 'date', nullable: false })
  updatedAt: string;
}
