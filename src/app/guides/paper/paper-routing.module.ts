import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperPage } from './paper.page';

const routes: Routes = [
  {
    path: '',
    component: PaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaperPageRoutingModule {}
