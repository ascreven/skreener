import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
})
export class MoviesModule { }
