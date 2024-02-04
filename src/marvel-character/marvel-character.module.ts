import { Module } from '@nestjs/common';
import { MarvelCharacterController } from './marvel-character.controller';
import { MarvelApiModule } from 'src/marvel-api/marvel-api.module';
import { MarvelCharacterService } from './marvel-character.service';

@Module({
  imports: [MarvelApiModule],
  controllers: [MarvelCharacterController],
  providers: [MarvelCharacterService],
})
export class MarvelCharacterModule {}
