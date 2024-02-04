import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';
import { User } from '../entity-store/src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(user: CreateUserDto) {
    console.log({ user });
    return await this.userRepo
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ ...user, createdAt: new Date() })
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
