import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IGenre } from 'src/app/models/genres.model';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  headers = new HttpHeaders().set("Authorization", `Bearer ${environment.movieDbAccessKey}`)
  genres: IGenre[];
  constructor(private http: HttpClient) {}

  // TODO: add response type
  getMovies(filters?): Observable<any> {
    const options = {
      headers: this.headers,
      params: {...filters, "watch_region": "US"}
    }
    return this.http.get<any>(
      `${environment.movieDbUrl}/discover/movie/`, options
    );
  }

  getMovie(id: any): Observable<any> {
    const options = {
      headers: this.headers,
      params: {
        "append_to_response": ['videos']
      }
    }
    return this.http.get<any>(
      `${environment.movieDbUrl}/movie/${id}`, options
    )
  }

  getMovieGenres(): Observable<any> {
    return this.http.get<any>(
      `${environment.movieDbUrl}/genre/movie/list?api_key=${environment.movieDbKey}`
    )
  }
}
