import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecyclablePage } from './recyclable.page';

const routes: Routes = [
  {
    path: '',
    component: RecyclablePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecyclablePageRoutingModule {}
