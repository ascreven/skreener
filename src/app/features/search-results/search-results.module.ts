import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsComponent } from './search-results.component';
import { SearchResultsRoutingModule } from './search-results.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultsModule } from 'src/app/layout/results/results.module';

@NgModule({
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    SharedModule,
    ResultsModule
  ],
  declarations: [
    SearchResultsComponent
  ],
})
export class SearchResultsModule { }
