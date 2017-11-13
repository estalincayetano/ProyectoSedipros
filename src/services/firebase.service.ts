import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class firebaseService {
  eventos = [];
  galeria = [];
  eventosnew: Array<any> = new Array<any>();
  constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {

  }

  public getEventos() {
    return this.afDB.list('eventos/')
  }
  public getGaleria() {
    return this.afDB.list('galeria/')
  }
  public getEventosbyFecha(fecha: string): Array<any> {
    let instance = this;
    let arrayResp: Array<any> = new Array<any>();
    this.getEventos().valueChanges().subscribe((resp) => {
      instance.eventosnew = resp;
      for (let evento of instance.eventosnew) {
        console.log("evento: ", evento);
        let fechaParametro: Date = new Date(fecha);
        let dateTeamp:string = evento.fecha;
        let arraDate:Array<any> = dateTeamp.split("/");
        let fechaevento: Date = new Date(Number(arraDate[2]), Number(arraDate[1]), Number(arraDate[0]));
        console.log("conversion de fecha: ", fechaevento.getTime());
        if (fechaevento.getTime() > fechaParametro.getTime()) { //Time :: conversion a MiliSgunos 23273982787392
          arrayResp.push(evento);
        }
      }
    })
    return arrayResp;
  }
  public getEvento(id) {
    //   return this.notes.filter(function(e,i){
    //       return e.id==id})[0]||{id:null,title:null,description:null
    //     };
    return this.afDB.object('eventos/' + id);
  }
  public getAgendas(id) {
    //   return this.notes.filter(function(e,i){
    //       return e.id==id})[0]||{id:null,title:null,description:null
    //     };
    return this.afDB.object('agendas/' + id);
  }
  public getPonentes(id) {
    //   return this.notes.filter(function(e,i){
    //       return e.id==id})[0]||{id:null,title:null,description:null
    //     };
    return this.afDB.object('ponentes/' + id);
  }

}