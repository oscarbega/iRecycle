import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guidePage } from './guide.page';

const routes: Routes = [
  {
    path: '',
    component: guidePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class guidePageRoutingModule {}
