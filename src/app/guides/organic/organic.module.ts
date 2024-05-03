import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganicPageRoutingModule } from './organic-routing.module';

import { OrganicPage } from './organic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganicPageRoutingModule
  ],
  declarations: [OrganicPage]
})
export class OrganicPageModule {}
