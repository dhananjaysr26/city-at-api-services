import { Test, TestingModule } from '@nestjs/testing';
import { MarvelCharacterController } from './marvel-character.controller';

describe('MarvelCharacterController', () => {
  let controller: MarvelCharacterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarvelCharacterController],
    }).compile();

    controller = module.get<MarvelCharacterController>(MarvelCharacterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
