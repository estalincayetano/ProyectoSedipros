import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PonenteDetallePage } from './ponente-detalle';

@NgModule({
  declarations: [
    PonenteDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(PonenteDetallePage),
  ],
})
export class PonenteDetallePageModule {}
