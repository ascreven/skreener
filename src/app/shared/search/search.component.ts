import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { find } from 'lodash';
import { SearchService } from 'src/app/shared/search/search.service';
import { ShowsService } from '../../features/shows/shows.service';
import { MoviesService } from '../../features/movies/movies.service';
import { Movie } from '../../features/movies/movies.model';
import { Show } from '../../features/shows/shows.model';
import { IGenre } from 'src/app/models/genres.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup({
    searchQuery: new FormControl('', Validators.required)
  });
  query: string = '';
  results: any[];
  // movies: Movie[];
  // shows: Show[];
  genres: IGenre[] = [];
  mediaList: any[];


  constructor(
    private searchService: SearchService,
    private moviesService: MoviesService,
    private showsService: ShowsService
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.query = this.searchForm.get("searchQuery").value;
    if (this.query) {
      this.getResults();
    }
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
      }
    })
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
