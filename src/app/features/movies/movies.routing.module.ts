import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieFiltersResolverService } from "./movie-filter-resolver.service";

import { MoviesComponent } from "./movies.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    resolve: {
      filters: MovieFiltersResolverService,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
