import { IsString, IsNotEmpty, Length } from 'class-validator';

export class SignInUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  phoneCountryCode: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 25)
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
