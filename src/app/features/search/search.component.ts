import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'lodash';
import { SearchService } from 'src/app/features/search/search.service';
import { ShowsService } from '../shows/shows.service';
import { MoviesService } from '../movies/movies.service';
import { Movie } from './../movies/movies.model';
import { Show } from './../shows/shows.model';
import { IGenre } from 'src/app/models/genres.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string = '';
  results: any[];
  movies: Movie[];
  shows: Show[];
  genres: IGenre[] = [];
  mediaList: any[];


  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private moviesService: MoviesService,
    private showsService: ShowsService
  ) { }

  ngOnInit(): void {

  }

  update(value: string) {
    this.query = value;
    if (this.query) {
      this.getResults();
    }
  }

  getResults() {
    this.searchService.getSearch(this.query)
    .subscribe(response => {
      this.results = response.results;
      console.log(this.results);
      if (this.results) {
        if (this.results[0].media_type === "movie") {
          this.movies = this.results;
        } else if (this.results[0].media_type === "tv") {
          this.shows = this.results;
        }
        this.getGenres();
        this.mediaList = this.movies ? this.movies : this.shows;
      }
    })
  }

  getGenres() {
    if (this.movies) {
      this.moviesService.getMovieGenres()
        .subscribe(response => {
          this.genres = response.genres;
          this.movies.forEach((movie: Movie) => {
            movie.genres = [];
            movie.genre_ids.forEach((id) => {
              const genre = find(this.genres, {id: id})
              movie.genres.push(genre);
            })
          });
        });
    } else if (this.shows) {
      this.showsService.getShowGenres()
        .subscribe(response => {
          this.genres = response.genres;
          this.shows.forEach((show: Show) => {
            show.genres = [];
            show.genre_ids.forEach((id) => {
              const genre = find(this.genres, {id: id})
              show.genres.push(genre);
            })
          });
        });
    }
  }
}
