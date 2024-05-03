import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HazardousPage } from './hazardous.page';

const routes: Routes = [
  {
    path: '',
    component: HazardousPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HazardousPageRoutingModule {}
