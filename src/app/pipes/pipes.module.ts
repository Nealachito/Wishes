import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroOkeyPipe } from './filtro-okey.pipe';

@NgModule({
  declarations: [FiltroOkeyPipe],
  imports: [
    CommonModule
  ],
  exports:[
    FiltroOkeyPipe
  ]
})
export class PipesModule { }
