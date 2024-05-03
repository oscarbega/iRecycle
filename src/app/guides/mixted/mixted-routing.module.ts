import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixtedPage } from './mixted.page';

const routes: Routes = [
  {
    path: '',
    component: MixtedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixtedPageRoutingModule {}
