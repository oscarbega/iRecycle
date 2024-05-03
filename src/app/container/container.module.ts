import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContainerPageRoutingModule } from './container-routing.module';

import { ContainerPage } from './container.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContainerPageRoutingModule
  ],
  declarations: [ContainerPage]
})
export class ContainerPageModule {}
