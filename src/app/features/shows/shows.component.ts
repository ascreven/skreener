import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'lodash';
import { ShowsService } from 'src/app/features/shows/shows.service';
import { Filter } from 'src/app/shared/filters/filters.model';
import { IGenre } from 'src/app/models/genres.model';
import { Show } from 'src/app/features/shows/shows.model';
import { ResultsComponent } from 'src/app/layout/results/results.component';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  filters: Filter[];
  genres: IGenre[];
  @ViewChild("results") resultsRef: ResultsComponent;

  constructor(
    private route: ActivatedRoute,
    private showsService: ShowsService
  ) {}

  ngOnInit(): void {
    this.filters = this.route.snapshot.data.filters;
    this.getShows();
  }

  getShows(filters?) {
    this.showsService.getShows(filters)
    .subscribe(response => {
      this.resultsRef.results = response.results;
      this.getShowGenres();
    })
  }

  getShowGenres() {
    this.showsService.getShowGenres()
      .subscribe(response => {
        this.genres = response.genres;
        this.resultsRef.results.forEach((show: Show) => {
          show.genres = [];
          show.genre_ids.forEach((id) => {
            const genre = find(this.genres, {id: id})
            show.genres.push(genre);
          })
        });
      });
  }
}
