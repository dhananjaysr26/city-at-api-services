import { Module } from '@nestjs/common';
import { MarvelCharacterController } from './marvel-character.controller';
import { MarvelApiModule } from 'src/marvel-api/marvel-api.module';
import { MarvelCharacterService } from './marvel-character.service';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';

@Module({
  imports: [MarvelApiModule],
  controllers: [MarvelCharacterController],
  providers: [MarvelCharacterService, JwtStrategy],
})
export class MarvelCharacterModule {}
