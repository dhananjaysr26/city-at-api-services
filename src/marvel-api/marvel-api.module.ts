import { Module } from '@nestjs/common';
import { MarvelApiService } from './marvel-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MarvelApiService],
  exports: [MarvelApiService],
})
export class MarvelApiModule {}
