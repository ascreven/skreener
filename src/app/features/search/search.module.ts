import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from 'src/app/features/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesModule } from 'src/app/features/movies/movies.module';


@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    MoviesModule
  ],
  declarations: [
    SearchComponent
  ],
})
export class SearchModule { }
