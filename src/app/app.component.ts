import { EventosPage } from './../pages/eventos/eventos';
import { HomePage } from './../pages/home/home';
import { GaleriaPage } from './../pages/galeria/galeria';
import { ProyectosPage } from './../pages/proyectos/proyectos';
import { DocumentosPage } from './../pages/documentos/documentos';

import { LoginPage } from './../pages/login/login';
import { Component ,ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

  
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages=[
      {title: 'Inicio',           component: HomePage,        icon: 'home'},
      {title: 'Eventos',          component: EventosPage,     icon: 'calendar'},
      {title: 'Documentos',       component: DocumentosPage,  icon: 'document'},
      {title: 'Proyectos',        component: ProyectosPage,   icon: 'ios-archive'},
      {title: 'Galeria',          component: GaleriaPage,     icon: 'images'},
      {title: 'Configuracion',    component: GaleriaPage,     icon: 'settings'},
      {title: 'Salir',            component: GaleriaPage,     icon: 'exit'}
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page);
  }
}

