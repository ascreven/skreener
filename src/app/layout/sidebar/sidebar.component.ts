import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Filter } from 'src/app/models/filters.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  filters: Filter[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    this.filters = data.filters
  }

  dropdownToggle(filter: any) {
    filter.isVisible = !filter.isVisible;
  }
}
