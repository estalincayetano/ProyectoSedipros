import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { firebaseService } from '../../services/firebase.service';
import { FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file'
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private service:firebaseService,
    private transfer: FileTransfer, private file: File) {
    service.getDocumentos().valueChanges()
    .subscribe(documentos=>{ 
      this.documentos=documentos
    });
 }
 
 download() {
  const url = 'http://www.liqun.org/mobile/sample.pdf';
  const fileTransfer: FileTransferObject = this.transfer.create();
  console.log("ruta: ", this.file.dataDirectory);
  fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    // handle error
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentosPage');
  }

}
