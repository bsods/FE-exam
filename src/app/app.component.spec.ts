import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
  
  var firebaseConfig = {
    apiKey: "AIzaSyAyKGphk093yxQC4FaK3s_p1xQT87xt_PE",
    authDomain: "cartwheel-fe.firebaseapp.com",
    databaseURL: "https://cartwheel-fe.firebaseio.com",
    projectId: "cartwheel-fe",
    storageBucket: "cartwheel-fe.appspot.com",
    messagingSenderId: "769454339935"
  }
  
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    
  });
  it(`should have as title 'Front-End Exam'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Front-End Exam');
  }));
  it('should render Start Task button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Start Task');
  });
});
