import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';

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
}
