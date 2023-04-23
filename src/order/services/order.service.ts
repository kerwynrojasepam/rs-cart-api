import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepo: Repository<Order>
  ) {}

  findById(id: string): Promise<Order> {
    return this.ordersRepo.findOne({ id });
  }

  async create(data: Partial<Order>): Promise<Order> {
    const id = v4();
    const order = {
      ...data,
      id,
      // status: 'inProgress',
    };

    await this.ordersRepo.insert(order);

    return this.findById(id);
  }

  async update(id: string, data: Partial<Order>) {
    const order = await this.findById(id);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    const updatedOrder = {
      ...data,
      id,
    };

    await this.ordersRepo.update({ id }, updatedOrder);

    return this.findById(id);
  }
}
