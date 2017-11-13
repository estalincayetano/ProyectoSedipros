import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
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
        console.log("item: ", this.itemsCollection);
    }
} 