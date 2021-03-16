import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidebarComponent } from "src/app/layout/sidebar/sidebar.component";

import { MoviesComponent } from "./movies.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: '',
    outlet: 'sidemenu',
    component: SidebarComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }