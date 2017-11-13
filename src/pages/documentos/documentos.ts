import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Item {
  name: string;
  price: number;
}
export interface Itemid extends Item { id: string; }
@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})


export class DocumentosPage {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: AngularFirestore) {
    /*this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    console.log("mirando",this.itemsCollection);
  */  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentosPage');
  }

}
