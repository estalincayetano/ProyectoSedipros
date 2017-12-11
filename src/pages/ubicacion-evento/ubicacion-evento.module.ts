import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UbicacionEventoPage } from './ubicacion-evento';

@NgModule({
  declarations: [
    UbicacionEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(UbicacionEventoPage),
  ],
})
export class UbicacionEventoPageModule {}
