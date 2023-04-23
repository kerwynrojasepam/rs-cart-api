import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StatusType } from '../typings/enum';
import { CartItem } from './cart-item.entity';

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

  @OneToMany(() => CartItem, (cartItems) => cartItems.cart)
  cartItems: CartItem[];
}
