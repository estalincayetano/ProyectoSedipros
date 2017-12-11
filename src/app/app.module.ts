import { AgendaPage } from './../pages/agenda/agenda';
import { UbicacionEventoPage } from './../pages/ubicacion-evento/ubicacion-evento';
import { AgendaDetallePage } from './../pages/agenda-detalle/agenda-detalle';
import { PonenteDetallePage } from './../pages/ponente-detalle/ponente-detalle';
import { EventoDetallePage } from './../pages/evento-detalle/evento-detalle';
import { firebaseService } from './../services/firebase.service';
import { EventosPage } from './../pages/eventos/eventos';
import { GaleriaPage } from './../pages/galeria/galeria';
import { DocumentosPage } from './../pages/documentos/documentos';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AngularFireModule } from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
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
    EventosPage,
    HomePage,
    DocumentosPage,
    GaleriaPage,
    AgendaPage,
    EventoDetallePage,
    PonenteDetallePage,
    UbicacionEventoPage,
    AgendaDetallePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    EventosPage,
    HomePage,
    AgendaPage,
    DocumentosPage,
    EventoDetallePage,
    PonenteDetallePage,
    AgendaDetallePage,
    UbicacionEventoPage,
    GaleriaPage
  ],
  providers: [
    StatusBar,
    FileTransfer,
    FileTransferObject,
    File, 
    SplashScreen,
    firebaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
