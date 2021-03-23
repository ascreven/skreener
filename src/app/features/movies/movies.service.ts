import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IGenre } from 'src/app/models/genres.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  genres: IGenre[];
  constructor(private http: HttpClient) {}

  // TODO: add response type
  getMovies(): Observable<any> {
    return this.http.get<any>(
      `${environment.movieDbUrl}/discover/movie/?api_key=${environment.movieDbKey}`
    );
  }

  getMovieGenres(): Observable<any> {
    return this.http.get<any>(
      `${environment.movieDbUrl}/genre/movie/list?api_key=${environment.movieDbKey}`
    )
  }
}
