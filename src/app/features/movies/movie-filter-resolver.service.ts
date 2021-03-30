import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of }  from 'rxjs';
import { MoviesService } from 'src/app/features/movies/movies.service';
import { IGenre } from 'src/app/models/genres.model';
import WATCH_PROVIDERS from './../../data/watch-providers.mock';

type IMovieFilters = {
  genres: IGenre[],
  watchProviders: any[]
}

@Injectable({
  providedIn: 'root'
})
export class MovieFilterResolverService implements Resolve<any> {

  // filters: IMovieFilters = {
  //   genres: [],
  //   watchProviders: WATCH_PROVIDERS
  // }
  filters = [];

  constructor(private ms: MoviesService) { }
  resolve(): Observable<any> | Observable<never> {
    this.ms.getMovieGenres()
      .subscribe(response => {
        this.filters.push(response.genres);
    });
    return of(this.filters);
  }
}

