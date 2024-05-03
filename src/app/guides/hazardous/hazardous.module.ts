import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HazardousPageRoutingModule } from './hazardous-routing.module';

import { HazardousPage } from './hazardous.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HazardousPageRoutingModule],
  declarations: [HazardousPage],
})
export class HazardousPageModule {}
