import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

import { FiltersComponent } from './filters/filters.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [FiltersComponent]
})
export class SharedModule { }
