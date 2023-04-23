import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

import { Cart } from 'src/entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartsRepo: Repository<Cart>
  ) {}
  findByUserId(userId: string): Promise<Cart> {
    return this.cartsRepo.findOne({ userId });
  }

  async createByUserId(userId: string): Promise<Cart> {
    const id = v4();
    const newCart = { id, userId, cartItems: [] };

    await this.cartsRepo.insert(newCart);

    return this.cartsRepo.findOne(id);
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { cartItems }: Cart): Promise<Cart> {
    const { id, ...rest } = await this.findOrCreateByUserId(userId);

    const updatedCart = {
      id,
      ...rest,
      cartItems: [ ...cartItems ],
    }

    await this.cartsRepo.update({ id }, updatedCart);

    return this.findByUserId(userId);
  }

  async removeByUserId(userId: string): Promise<void> {
    await this.cartsRepo.delete({ userId });
  }

}
