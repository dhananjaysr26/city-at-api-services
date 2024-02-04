import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/database.config';
import { MarvelApiModule } from './marvel-api/marvel-api.module';
import { MarvelCharacterModule } from './marvel-character/marvel-character.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), MarvelApiModule, MarvelCharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
