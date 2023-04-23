import { Column, Entity, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';

import { Cart } from './cart.entity';

@Entity('cart_items')
export class CartItem {
  @PrimaryColumn('uuid')
  cartId: string;

  @Column({ type: 'uuid' })
  productId: string;

  @Column({ type: 'integer' })
  count: number;4

  @OneToOne(() => Cart)
  @JoinColumn({ referencedColumnName: 'id' })
  cart: Cart;
}
