import { Body, Controller, Post } from '@nestjs/common';
import { AuthConst } from './constant/auth.constant';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/auth.dto';

@Controller(AuthConst.Auth)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthConst.SignUp)
  async signUpUser(@Body() body: CreateUserDto) {
    return this.authService.signupUser(body);
  }

  @Post(AuthConst.SignIn)
  async signInUser(@Body() body: SignInUserDto) {
    return this.authService.signInUser(body);
  }
}
