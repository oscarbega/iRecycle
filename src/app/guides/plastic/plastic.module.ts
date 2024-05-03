import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlasticPageRoutingModule } from './plastic-routing.module';

import { PlasticPage } from './plastic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlasticPageRoutingModule
  ],
  declarations: [PlasticPage]
})
export class PlasticPageModule {}
