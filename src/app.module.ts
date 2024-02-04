import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.config';
import { MarvelApiModule } from './marvel-api/marvel-api.module';
import { MarvelCharacterModule } from './marvel-character/marvel-character.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FavoriteCharacterModule } from './favorite-character/favorite-character.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), MarvelApiModule, MarvelCharacterModule, UsersModule, AuthModule, FavoriteCharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
