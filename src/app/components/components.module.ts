import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import {SubmissionComponent} from "./submission/submission.component";


@NgModule({
  declarations: [MapComponent, SubmissionComponent],
  imports: [
    CommonModule
  ],
  exports:[MapComponent, SubmissionComponent]
})
export class ComponentsModule { }
