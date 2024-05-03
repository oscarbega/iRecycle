import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlasticPage } from './plastic.page';

const routes: Routes = [
  {
    path: '',
    component: PlasticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlasticPageRoutingModule {}
