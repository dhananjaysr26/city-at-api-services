import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MarvelCharacterService } from './marvel-character.service';
import { marvelCharacterSearchDto } from './dto/marvelCharecter.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('marvel-character')
export class MarvelCharacterController {
  constructor(private marvelCharacterService: MarvelCharacterService) {}

  @Get('/search')
  @UseGuards(JwtAuthGuard)
  async getMarvelCharacterSuggestions(
    @Query() payload: marvelCharacterSearchDto,
  ) {
    return this.marvelCharacterService.getMarvelCharacterSuggestions(payload);
  }
}
