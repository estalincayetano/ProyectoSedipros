import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaDetallePage } from './agenda-detalle';

@NgModule({
  declarations: [
    AgendaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaDetallePage),
  ],
})
export class AgendaDetallePageModule {}
