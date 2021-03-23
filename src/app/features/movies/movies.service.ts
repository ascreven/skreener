import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  // TODO: add response type
  getMovies(): Observable<any> {
    return this.http.get<any>(
      `${environment.movieDbUrl}/discover/movie/?api_key=${environment.movieDbKey}`
    );
  }
}
