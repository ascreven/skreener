import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Filter } from 'src/app/models/filters.model';
import { MoviesService } from 'src/app/features/movies/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  filters: Filter[] = [];

  constructor(private route: ActivatedRoute, private ms: MoviesService) { }

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.filters = data.filters
  }

  dropdownToggle(filter: any) {
    filter.isVisible = !filter.isVisible;
  }

  filterOptionToggle(filter: any, id: any, filters: any) {
    if(filter.selected.indexOf(id) !== -1) {
      filter.selected.splice(filter.selected.indexOf(id), 1);
    } else {
      filter.selected.push(id);
    }
    this.ms.getMovies(filters).subscribe(response => {
      console.log(response.results);
    })
  }
}
