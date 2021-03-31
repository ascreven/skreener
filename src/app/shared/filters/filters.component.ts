import { Component, Input } from '@angular/core';

import { Filter } from 'src/app/models/filters.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filters: Filter[];

  constructor() { }

  dropdownToggle(filter: any) {
    filter.isVisible = !filter.isVisible;
  }

  filterOptionToggle(filter: any, id: any, filters: any) {
    if(filter.selected.indexOf(id) !== -1) {
      filter.selected.splice(filter.selected.indexOf(id), 1);
    } else {
      filter.selected.push(id);
    }
  }
}
