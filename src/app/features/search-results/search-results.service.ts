import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  headers = new HttpHeaders().set("Authorization", `Bearer ${environment.movieDbAccessKey}`)

  constructor(private http: HttpClient) {}

  getSearch(query?): Observable<any> {
    const options = {
      headers: this.headers,
      params: {"query": query, "region": "US"}
    }
    return this.http.get<any>(
      `${environment.movieDbUrl}/search/multi/`, options
    );
  }
}
