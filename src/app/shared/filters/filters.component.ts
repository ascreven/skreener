import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list';

import { Filter } from 'src/app/shared/filters/filters.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() filters: Filter[];
  @Output() filtersChange = new EventEmitter();
  activeFilters: any = {};

  constructor() { }

  handleSelectionChange(filterId:string, selectedOptions: MatListOption[]) {
    setTimeout(() => {
      this.activeFilters[filterId] = [];
      selectedOptions.forEach(option => {
        this.activeFilters[filterId].push(option.value)
      });

    }, 1000);
  }
}
