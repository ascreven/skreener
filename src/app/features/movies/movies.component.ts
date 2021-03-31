import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'lodash';
import { MoviesService } from 'src/app/features/movies/movies.service';
import { Filter } from 'src/app/models/filters.model';
import { IGenre } from 'src/app/models/genres.model';
import { Movie } from './movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  filters: Filter[];
  genres: IGenre[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.filters = this.route.snapshot.data.filters;
    this.getMovies();
  }

  getMovies(activeFilters?: any) {
    this.movieService.getMovies(activeFilters).subscribe(response => {
      console.log(response.results);
      this.movies = response.results;
      this.getMovieGenres();
    })
  }

  getMovieGenres() {
    this.movieService.getMovieGenres()
      .subscribe(response => {
        this.genres = response.genres;
        this.movies.forEach((movie: Movie) => {
          movie.genres = [];
          movie.genre_ids.forEach((id) => {
            const genre = find(this.genres, {id: id})
            movie.genres.push(genre);
          })
        });
      })
  }
}
