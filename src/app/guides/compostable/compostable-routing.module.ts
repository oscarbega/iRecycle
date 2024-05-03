import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompostablePage } from './compostable.page';

const routes: Routes = [
  {
    path: '',
    component: CompostablePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompostablePageRoutingModule {}
