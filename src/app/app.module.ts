
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AngularFireModule } from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig={
  apiKey: "AIzaSyDyVl7N2tRaSv8nae-4H8necFf1b9bgEu8",
  authDomain: "proyecto-sedipro.firebaseapp.com",
  databaseURL: "https://proyecto-sedipro.firebaseio.com",
  projectId: "proyecto-sedipro",
  storageBucket: "proyecto-sedipro.appspot.com",
  messagingSenderId: "587850499268"
};
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
