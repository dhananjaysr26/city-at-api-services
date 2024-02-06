import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(
    phoneNumber: string,
    phoneCountryCode: string,
    password: string,
  ) {
    const user = await this.authService.signInUser({
      phoneCountryCode,
      phoneNumber,
      password,
    });

    // console.log('=> Local Strategy', { user });
    return user;
  }
}
