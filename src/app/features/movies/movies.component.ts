import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'lodash';
import { MoviesService } from 'src/app/features/movies/movies.service';
import { Filter } from 'src/app/shared/filters/filters.model';
import { IGenre } from 'src/app/models/genres.model';
import { Movie } from './movies.model';
import { ResultsComponent } from 'src/app/layout/results/results.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent implements OnInit {
  filters: Filter[];
  genres: IGenre[] = [];

  @ViewChild("results") resultsRef: ResultsComponent;
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.filters = this.route.snapshot.data.filters;
    this.getMovies();
  }

  getMovies(filters?) {
    this.movieService.getMovies(filters)
    .subscribe(response => {
      this.resultsRef.results = response.results;
      this.getMovieGenres();
    })
  }

  getMovieGenres() {
    this.movieService.getMovieGenres()
      .subscribe(response => {
        this.genres = response.genres;
        this.resultsRef.results.forEach((movie: Movie) => {
          movie.genres = [];
          movie.genre_ids.forEach((id) => {
            const genre = find(this.genres, {id: id})
            movie.genres.push(genre);
          })
        });
      })
  }
}
