import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlassPageRoutingModule } from './glass-routing.module';

import { GlassPage } from './glass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlassPageRoutingModule
  ],
  declarations: [GlassPage]
})
export class GlassPageModule {}
