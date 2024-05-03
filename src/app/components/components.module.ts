import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import {SubmissionComponent} from "./submission/submission.component";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { provideStorage } from '@angular/fire/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from 'src/environments/environment';
import { MapService } from '../services/map.service';


@NgModule({
  declarations: [MapComponent, SubmissionComponent],
  imports: [
    CommonModule,
  ],
  exports:[MapComponent, SubmissionComponent],
  providers:[MapService]
})
export class ComponentsModule { }
