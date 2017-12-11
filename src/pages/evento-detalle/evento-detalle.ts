import { AgendaDetallePage } from './../agenda-detalle/agenda-detalle';
import { PonenteDetallePage } from './../ponente-detalle/ponente-detalle';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UbicacionEventoPage } from '../ubicacion-evento/ubicacion-evento';

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
  openUbicacion(){
    this.navCtrl.push(UbicacionEventoPage)
  }
 /* showMap() {
    setTimeout(() => {
        this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
        leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri'
        }).addTo(this.map);
        this.showMarkers();
    })
}*/
}
