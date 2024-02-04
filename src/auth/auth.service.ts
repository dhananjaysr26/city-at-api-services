import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signupUser(user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
