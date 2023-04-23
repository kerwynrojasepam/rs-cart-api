import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>
  ) {}

  findOne(userId: string): Promise<User> {
    return this.usersRepo.findOne(userId);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepo.findOne({ email });
  }

  async createOne({ email, password }: Partial<User>): Promise<User> {
    const id = v4();
    const newUser = { id, name: email, email, password };

    await this.usersRepo.insert(newUser);

    return this.findOne(id);
  }
}
