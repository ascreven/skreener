import { Component, OnInit } from '@angular/core';

import GENRES from './../../data/genres.mock'

// import { FilterService } from '../filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  filters: any[] = [];

  // constructor(private filterService: FilterService) { }
  constructor() { }

  ngOnInit(): void {
    this.getFilters();
  }

  getFilters(): void {
    // this.filterService.getFilters()
    // .subscribe((response: any) => {
    //   this.filters = response.results;
    // });
    this.filters = GENRES;
  }

}

