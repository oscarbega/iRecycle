import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlassPage } from './glass.page';

const routes: Routes = [
  {
    path: '',
    component: GlassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlassPageRoutingModule {}
