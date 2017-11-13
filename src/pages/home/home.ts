import { EventoDetallePage } from './../evento-detalle/evento-detalle';
import { firebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  eventos:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: firebaseService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.eventos = this.servicio.getEventosbyFecha("11/12/2017");
  }
  openEventoDetail(eventos) {
    this.navCtrl.push(EventoDetallePage, {evento:eventos});
}
}
