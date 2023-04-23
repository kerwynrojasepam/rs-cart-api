import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatusType } from '../typings/enum';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({ type: 'uuid', nullable: false })
  cartId: string;

  @Column({ type: 'json', nullable: true })
  payment: Record<string, unknown>;

  @Column({ type: 'json', nullable: true })
  delivery: Record<string, unknown>;

  @Column({ type: 'text', nullable: true })
  comments: string;

  @Column({ type: 'enum', nullable: false })
  status: StatusType;

  @Column({ type: 'numeric', nullable: false })
  total: number;
}
