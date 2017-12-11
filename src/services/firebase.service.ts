import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { DateFormat } from '../util/helper';

@Injectable()
export class firebaseService {
  eventos = [];
  galeria = [];
  documentos= [];
  eventosnew: Array<any> = new Array<any>();
  constructor(private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
    
  }

  public getEventos() {
    return this.afDB.list('eventos/')
  }
  public getGaleria() {
    return this.afDB.list('galeria/')
  }
  public getDocumentos(){
  return this.afDB.list('documentos/')
  }
  public getEventosbyFecha(fechaFiltro: string): Array<any> {
    let instance = this;
    let arrayResp: Array<any> = new Array<any>();
    this.getEventos().valueChanges().subscribe((resp) => {
      instance.eventosnew = resp;
      let format: DateFormat = new DateFormat();
      let timeFiltro = format.ConvertirTime(fechaFiltro);
      for (let evento of instance.eventosnew) {
        let timeEvento = format.ConvertirTime(evento.fecha);
        if (timeEvento >= timeFiltro) {
          arrayResp.push(evento);
        }
      }
    })
    console.log(arrayResp);
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