import { Injectable } from '@nestjs/common';
import { MarvelApiService } from 'src/marvel-api/marvel-api.service';
import { marvelCharacterSearchDto } from './dto/marvelCharecter.dto';

@Injectable()
export class MarvelCharacterService {
  constructor(private marvelApiService: MarvelApiService) {}

  async getMarvelCharacterSuggestions(payload: marvelCharacterSearchDto) {
    // console.log({ payload });
    return this.marvelApiService.searchMarvelCharacters(payload);
  }
}
