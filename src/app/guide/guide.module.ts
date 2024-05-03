import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { guidePage } from './guide.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { guidePageRoutingModule } from './guide-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    guidePageRoutingModule,
  ],
  declarations: [guidePage],
})
export class guidePageModule {}
