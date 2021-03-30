import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of }  from 'rxjs';
import { MoviesService } from 'src/app/features/movies/movies.service';
import { IGenre } from 'src/app/models/genres.model';
import WATCH_PROVIDERS from './../../data/watchproviders.mock';

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

  constructor(private ms: MoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    this.ms.getMovieGenres()
      .subscribe(response => {
        this.filters.push(response.genres);
    });
    return of(this.filters);
  }
}

