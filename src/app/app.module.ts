import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"apiKey": "AIzaSyAz4bRFMf-6LLsc3zWoJnkzwrDey3CMpzA", "authDomain": "irecycle-7019d.firebaseapp.com", "databaseURL": "https://irecycle-7019d-default-rtdb.europe-west1.firebasedatabase.app", "projectId": "irecycle-7019d", "storageBucket": "irecycle-7019d.appspot.com", "messagingSenderId": "1059967122725", "appId": "1:1059967122725:web:05f5d8840d809f75d86ecc", "measurementId": "G-YN5Y6CVEFM"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
