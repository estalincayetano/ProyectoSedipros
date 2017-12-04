import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PonenteDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ponente-detalle',
  templateUrl: 'ponente-detalle.html',
})
export class PonenteDetallePage {
ponente:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ponente=this.navParams.get("ponente");
    console.log(this.ponente)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PonenteDetallePage');
  }

}
