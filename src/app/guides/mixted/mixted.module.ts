import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixtedPageRoutingModule } from './mixted-routing.module';

import { MixtedPage } from './mixted.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MixtedPageRoutingModule],
  declarations: [MixtedPage],
})
export class MixtedPageModule {}
