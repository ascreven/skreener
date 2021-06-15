import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./features/shows/shows.module').then(m => m.ShowsModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search-results/search-results.module').then(m => m.SearchResultsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
