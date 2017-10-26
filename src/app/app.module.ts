import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAyKGphk093yxQC4FaK3s_p1xQT87xt_PE",
    authDomain: "cartwheel-fe.firebaseapp.com",
    databaseURL: "https://cartwheel-fe.firebaseio.com",
    projectId: "cartwheel-fe",
    storageBucket: "cartwheel-fe.appspot.com",
    messagingSenderId: "769454339935"
  }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
