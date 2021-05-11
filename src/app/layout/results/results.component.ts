import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Movie } from 'src/app/features/movies/movies.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultsComponent implements OnInit {
  public results: Movie[];
  constructor() { }

  ngOnInit(): void {}

}
