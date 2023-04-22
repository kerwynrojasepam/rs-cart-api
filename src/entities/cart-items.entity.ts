import { Column, Entity, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';

import { Cart } from './carts.entity';

@Entity('cart_items')
export class CartItems {
  @PrimaryColumn('uuid')
  @OneToOne(() => Cart)
  @JoinColumn({ referencedColumnName: 'id' })
  cartId: string;

  @Column({ type: 'uuid' })
  productId: string;

  @Column({ type: 'integer' })
  count: number;
}
