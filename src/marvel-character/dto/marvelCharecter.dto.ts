import { IsNumber, IsOptional, IsString } from 'class-validator';

export class marvelCharacterSearchDto {
  @IsOptional()
  @IsString()
  query: string;

  @IsOptional()
  @IsNumber()
  limit: number;

  @IsOptional()
  @IsNumber()
  offset: number;
}
