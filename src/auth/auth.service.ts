import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
import { SignInUserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signupUser(payload: CreateUserDto) {
    const { phoneCountryCode, phoneNumber, email } = payload;
    const user = await this.userService.getUserByUserDetails({
      phoneCountryCode,
      phoneNumber,
    });
    // console.log({ payload, user });
    if (user) {
      throw new BadRequestException(
        `User already exist with this phone Number: +${phoneCountryCode}-${phoneNumber}`,
      );
    }

    const userEmail = await this.userService.getUserByUserDetails({
      email,
    });
    if (userEmail) {
      throw new BadRequestException(
        `User already exist with this Email: ${email}`,
      );
    }
    return this.userService.createUser(payload);
  }

  async signInUser({ password, phoneCountryCode, phoneNumber }: SignInUserDto) {
    const user = await this.userService.getUserByUserDetails({
      phoneCountryCode,
      phoneNumber,
    });

    if (!user) {
      throw new NotFoundException(
        `User Not Found with phone Number: +${phoneCountryCode}-${phoneNumber}`,
      );
    }

    if (user.password !== password) {
      throw new ForbiddenException(`Invalid User Credentials!`);
    }
    return user;
  }
}
