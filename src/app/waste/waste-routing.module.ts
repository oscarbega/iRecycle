import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WastePage } from './waste.page';

const routes: Routes = [
  {
    path: '',
    component: WastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WastePageRoutingModule {}
