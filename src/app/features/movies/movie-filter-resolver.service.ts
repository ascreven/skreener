import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of }  from 'rxjs';

import { MoviesService } from 'src/app/features/movies/movies.service';
import { Filter } from 'src/app/shared/filters/filters.model';
import WATCH_PROVIDERS from './../../data/watch-providers.mock';

@Injectable({
  providedIn: 'root'
})
export class MovieFilterResolverService implements Resolve<any> {

  filters: Filter[] = [
    {
      options: WATCH_PROVIDERS,
      title: "Watch Providers",
      isVisible: true,
      name: "provider_name",
      optionId: "provider_id",
      id: "with_watch_providers"
    }
  ];

  constructor(private ms: MoviesService) { }
  resolve(): Observable<any> | Observable<never> {
    this.ms.getMovieGenres()
      .subscribe((response) => {
        const filter = new Filter(response.genres, "Genres", "with_genres")
        this.filters.push(filter);
    });
    return of(this.filters);
  }
}

