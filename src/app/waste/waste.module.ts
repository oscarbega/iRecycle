import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WastePageRoutingModule } from './waste-routing.module';

import { WastePage } from './waste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WastePageRoutingModule
  ],
  declarations: [WastePage]
})
export class WastePageModule {}
