import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroOkey',
  pure: false
})
export class FiltroOkeyPipe implements PipeTransform {

  transform(listas:Lista[], estado:boolean=true): Lista[] {
    return listas.filter(datal=>{
      return datal.estado===estado;
    });
     
  }

}
