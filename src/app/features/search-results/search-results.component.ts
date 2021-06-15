import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'lodash';
import { SearchService } from 'src/app/shared/search/search.service';
import { ShowsService } from '../../features/shows/shows.service';
import { MoviesService } from '../../features/movies/movies.service';
import { Movie } from '../../features/movies/movies.model';
import { Show } from '../../features/shows/shows.model';
import { Filter } from 'src/app/shared/filters/filters.model';
import { IGenre } from 'src/app/models/genres.model';
import { ResultsComponent } from 'src/app/layout/results/results.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  filters: Filter[];
  query: string = "";

  results: any[];
  // movies: Movie[];
  // shows: Show[];
  genres: IGenre[] = [];
  mediaList: any[];

  @ViewChild("results") resultsRef: ResultsComponent;
  constructor(private route: ActivatedRoute,
    private searchService: SearchService,
    private moviesService: MoviesService,
    private showsService: ShowsService) { }

  ngOnInit(): void {
    this.filters = this.route.snapshot.data.filters;
    this.route.queryParams
      .subscribe(params => {
        this.query = params.query;
        this.getResults();
      }
    );
  }

  getResults() {
    this.getGenres();
    this.searchService.getSearch(this.query)
    .subscribe(response => {
      this.results = response.results;
      console.log(this.results);
      if (this.results) {
        this.results.forEach( (result, index) => {
          result.genres = [];
          result.genre_ids.forEach((id) => {
            const genre = find(this.genres, {id: id})
            result.genres.push(genre);
          })
          // if (result.media_type === "movie") {
          //   this.movies ? this.movies.push(result) : this.movies = [ result ];
          // } else if (result.media_type === "tv") {
          //   this.shows ? this.shows.push(result) : this.shows = [ result ];
          // }
          this.mediaList ? this.mediaList.push(result) : this.mediaList = [ result ];
        })
        this.resultsRef.results = this.mediaList;
      }
    })
  }

  getResultsWithFilter($event: any) {
  }

  getGenres() {
    let movieGenres: IGenre[] = [];
    this.moviesService.getMovieGenres().subscribe(response => {
      movieGenres = response.genres;
      this.genres = this.genres.concat(movieGenres);
    });
    let tvGenres: IGenre[] = [];
    this.showsService.getShowGenres().subscribe(response => {
      tvGenres = response.genres;
      this.genres = this.genres.concat(tvGenres);
    });
  }

}
