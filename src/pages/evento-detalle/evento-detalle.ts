import { AgendaDetallePage } from './../agenda-detalle/agenda-detalle';
import { PonenteDetallePage } from './../ponente-detalle/ponente-detalle';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventoDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento-detalle',
  templateUrl: 'evento-detalle.html',
})
export class EventoDetallePage {
evento:any={};
agenda:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evento=this.navParams.get("evento");
    this.agenda=this.evento.agenda;
    console.log(this.evento)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoDetallePage');
  }
  openPonenteDetail(ponente){
    this.navCtrl.push(PonenteDetallePage,{ponente:ponente});
  }
  openAgendaDetail(){
    this.navCtrl.push(AgendaDetallePage,{agenda:this.agenda});
  }
}
