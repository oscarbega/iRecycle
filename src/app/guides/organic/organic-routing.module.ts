import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganicPage } from './organic.page';

const routes: Routes = [
  {
    path: '',
    component: OrganicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganicPageRoutingModule {}
