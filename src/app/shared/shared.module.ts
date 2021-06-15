import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FiltersComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  exports: [
    FiltersComponent,
    SearchComponent
  ]
})
export class SharedModule { }
