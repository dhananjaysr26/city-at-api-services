import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';
import { SignInUserDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

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
    const { password: userPassword, ...user } =
      await this.userService.getUserByUserDetails({
        phoneCountryCode,
        phoneNumber,
      });

    if (!user) {
      throw new NotFoundException(
        `User Not Found with phone Number: +${phoneCountryCode}-${phoneNumber}`,
      );
    }

    if (userPassword !== password) {
      throw new ForbiddenException(`Invalid User Credentials!`);
    }
    const secretToken = this.jwtService.sign(user);
    return { user, secretToken };
  }

  async getAuthUserData(id: number) {
    const { password, ...user } = await this.userService.getUserByUserDetails({
      id,
    });
    return user;
  }
}
