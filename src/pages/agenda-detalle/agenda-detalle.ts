import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-detalle',
  templateUrl: 'agenda-detalle.html',
})
export class AgendaDetallePage {
  agenda:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.agenda=this.navParams.get("agenda");
    console.log(this.agenda ,"xsds");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaDetallePage');
  }

}
