import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecyclablePageRoutingModule } from './recyclable-routing.module';

import { RecyclablePage } from './recyclable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecyclablePageRoutingModule,
  ],
  declarations: [RecyclablePage],
})
export class RecyclablePageModule {}
