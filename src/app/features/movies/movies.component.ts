import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/features/movies/movies.service';
import { Movie } from './movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  
  movies: Movie[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(response => {
        this.movies = response.results;
      })
  }
}
