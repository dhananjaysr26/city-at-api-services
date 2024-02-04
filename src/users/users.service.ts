import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/entity-store/src/entities/user.entity';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(user: CreateUserDto) {
    return await this.userRepo
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();
  }
  // this will return user by email,id,phoneNumber
  async getUserByUserDetails(criteria: Partial<User>): Promise<User> {
    const user = await this.userRepo.findOne({ where: criteria });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
