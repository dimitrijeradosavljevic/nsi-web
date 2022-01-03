import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullTextPage } from './full-text.page';

const routes: Routes = [
  {
    path: '',
    component: FullTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullTextPageRoutingModule {}
