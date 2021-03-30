import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IGenre } from 'src/app/models/genres.model';
import { Filter } from 'src/app/models/filters.model';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  headers = {
    headers: new HttpHeaders().set("Authorization", `Bearer ${environment.movieDbAccessKey}`)
  };

  genres: IGenre[];
  constructor(private http: HttpClient) {}

  // TODO: add response type
  getMovies(filters?: any): Observable<any> {
    let selected = ``;
    if (filters && filters[0].selected.length > 0) {
      selected = selected + `&with_watch_providers=` + filters[0].selected.toString();
    }
    if (filters && filters[1].selected.length > 0) {
      selected = selected + `&with_genres=` + filters[1].selected.toString();
    }
    if (selected.length > 0) {
      selected = `?api_key=${environment.movieDbKey}` + selected;
    } else {
      selected = `/`;
    }

    return this.http.get<any>(
      `${environment.movieDbUrl}/discover/movie` + selected, this.headers
    );
  }

  getMovieGenres(): Observable<any> {
    return this.http.get<any>(
      `${environment.movieDbUrl}/genre/movie/list?api_key=${environment.movieDbKey}`
    )
  }
}
