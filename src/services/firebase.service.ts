import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class firebaseService{
  eventos=[];
  galeria=[];
  constructor(private afDB:AngularFireDatabase, private afAuth:AngularFireAuth ){

    }
 
    public getEventos(){
        return this.afDB.list('eventos/')
    }
    public getGaleria(){
      return this.afDB.list('galeria/')
  }
    public getEvento(id){
        //   return this.notes.filter(function(e,i){
        //       return e.id==id})[0]||{id:null,title:null,description:null
        //     };
        return this.afDB.object('eventos/' + id);
      }
      public getAgendas(id){
        //   return this.notes.filter(function(e,i){
        //       return e.id==id})[0]||{id:null,title:null,description:null
        //     };
        return this.afDB.object('agendas/' + id);
      }
      public getPonentes(id){
        //   return this.notes.filter(function(e,i){
        //       return e.id==id})[0]||{id:null,title:null,description:null
        //     };
        return this.afDB.object('ponentes/' + id);
      }

}