import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompostablePageRoutingModule } from './compostable-routing.module';

import { CompostablePage } from './compostable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompostablePageRoutingModule,
  ],
  declarations: [CompostablePage],
})
export class CompostablePageModule {}
