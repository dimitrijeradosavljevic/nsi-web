import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'full-text',
    loadChildren: () => import('./pages/full-text/full-text.module').then( m => m.FullTextPageModule)
  },
  {
    path: 'location-search',
    loadChildren: () => import('./pages/geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'date',
    loadChildren: () => import('./pages/date/date.module').then( m => m.DatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
