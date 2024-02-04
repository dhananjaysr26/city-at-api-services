import { Test, TestingModule } from '@nestjs/testing';
import { MarvelCharacterService } from './marvel-character.service';

describe('MarvelCharacterService', () => {
  let service: MarvelCharacterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarvelCharacterService],
    }).compile();

    service = module.get<MarvelCharacterService>(MarvelCharacterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
