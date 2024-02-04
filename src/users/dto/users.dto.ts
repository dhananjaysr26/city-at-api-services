import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 10)
  phoneCountryCode: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 25)
  phoneNumber: string;
}
