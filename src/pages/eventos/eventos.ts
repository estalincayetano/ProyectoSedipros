import { EventoDetallePage } from './../evento-detalle/evento-detalle';
import { firebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  eventos = [];
  fecha;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: firebaseService) {
    service.getEventos().valueChanges()
      .subscribe(eventos => {
        this.eventos = eventos;
      });
  }
  openEventoDetail(eventos) {
    this.navCtrl.push(EventoDetallePage, { evento: eventos });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

  valuechange(event) {
    console.log(event.target.value);
    let fechaFiltro = event.target.value;
    this.eventos = this.service.getEventosbyFecha(fechaFiltro);
    console.log(this.eventos);
  }

}
