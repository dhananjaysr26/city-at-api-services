import { Body, Controller, Post } from '@nestjs/common';
import { AuthConst } from './constant/auth.constant';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { AuthService } from './auth.service';

@Controller(AuthConst.Auth)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthConst.SignUp)
  async signUpUser(@Body() body: CreateUserDto) {
    return this.authService.signupUser(body);
  }
}
