import { firebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  galeria=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, service: firebaseService) {
    service.getGaleria().valueChanges()
    .subscribe(galeria => {
      this.galeria = galeria;
      console.log(galeria,"sads")
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriaPage');
  }

}
