import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieFilterResolverService } from "./movie-filter-resolver.service";

import { MoviesComponent } from "./movies.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    resolve: {
      filters: MovieFilterResolverService,
    }
  },
  {
    path: ":id",
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
