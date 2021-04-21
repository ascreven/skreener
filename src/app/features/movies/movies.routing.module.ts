import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
