import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
export interface Item {
    name: string;
    price: number;
}
export interface Itemid extends Item { id: string; }
export class storageService {
    itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
    data: Observable<any>;

    constructor(private db: AngularFirestore) {
    }
    public getDocumentos(){
        this.itemsCollection = this.db.collection<Item>('Documentos/');
        this.items = this.itemsCollection.snapshotChanges().map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as Item;
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          });
    }
} 