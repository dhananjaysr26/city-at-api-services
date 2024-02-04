import { Injectable, ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  MarvelApiBaseUrl,
  MarvelApiHash,
  MarvelApiKey,
} from 'src/config/globalConfig';
import { MarvelSearchApiProps } from 'src/interface/global';
import { Observable, catchError, map } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class MarvelApiService {
  constructor(private readonly httpService: HttpService) {}

  async searchMarvelCharacters({
    query = '',
    limit = 20,
    offset = 0,
  }: MarvelSearchApiProps): Promise<Observable<AxiosResponse<any>>> {
    // console.log({ query, limit, offset });
    // console.log(
    //   `${MarvelApiBaseUrl}/characters?ts=1&apikey=${MarvelApiKey}&hash=${MarvelApiHash}&nameStartsWith=${query}&limit=${limit}&offset=${offset}`,
    // );
    return this.httpService
      .get(
        `${MarvelApiBaseUrl}/characters?ts=1&apikey=${MarvelApiKey}&hash=${MarvelApiHash}&nameStartsWith=${query}&limit=${limit}&offset=${offset}`,
      )
      .pipe(
        map((res) => res.data),
        catchError((error: AxiosError) => {
          console.log('Axios Error', error);
          throw new ForbiddenException('Forbidden');
        }),
      );
  }
}
