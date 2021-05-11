import { Injectable } from '@angular/core';
import { Observable, of }  from 'rxjs';

import { ShowsService } from 'src/app/features/shows/shows.service';
import { Filter } from 'src/app/shared/filters/filters.model';
import WATCH_PROVIDERS from './../../data/watch-providers.mock';

@Injectable({
  providedIn: 'root'
})
export class ShowFilterResolverService {

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

  constructor(private ss: ShowsService) { }
  resolve(): Observable<any> | Observable<never> {
    const genreFilter = this.filters.find(
      (filter) => filter.title === 'Genres'
    );

    if (!genreFilter) {
      this.ss.getShowGenres().subscribe((response) => {
        const filter = new Filter(response.genres, 'Genres', 'with_genres');
        this.filters.push(filter);
      });
    }
    return of(this.filters);
  }
}
