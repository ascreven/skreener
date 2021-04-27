import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFilterResolverService } from "./show-filter-resolver.service";

import { ShowsComponent } from './shows.component';

const routes: Routes = [
  {
    path: '',
    component: ShowsComponent,
    resolve: {
      filters: ShowFilterResolverService,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
