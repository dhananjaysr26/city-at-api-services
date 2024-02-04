import { Module } from '@nestjs/common';
import { FavoriteCharacterController } from './favorite-character.controller';
import { FavoriteCharacterService } from './favorite-character.service';

@Module({
  controllers: [FavoriteCharacterController],
  providers: [FavoriteCharacterService],
})
export class FavoriteCharacterModule {}
