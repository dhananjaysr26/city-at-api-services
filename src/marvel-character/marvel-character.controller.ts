import { Controller, Get, Query } from '@nestjs/common';
import { MarvelCharacterService } from './marvel-character.service';
import { marvelCharacterSearchDto } from './dto/marvelCharecter.dto';

@Controller('marvel-character')
export class MarvelCharacterController {
  constructor(private marvelCharacterService: MarvelCharacterService) {}

  @Get('/search')
  async getMarvelCharacterSuggestions(
    @Query() payload: marvelCharacterSearchDto,
  ) {
    return this.marvelCharacterService.getMarvelCharacterSuggestions(payload);
  }
}
