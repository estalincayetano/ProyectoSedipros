import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { firebaseService } from '../../services/firebase.service';

/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})


export class DocumentosPage {
documentos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service:firebaseService) {
    service.getDocumentos().valueChanges()
    .subscribe(documentos=>{ 
      this.documentos=documentos
    });
 }
download(){
 /* var folderName = 'Download';
  var fileName;
*/
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentosPage');
  }

}
