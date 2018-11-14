import { Pipe, PipeTransform } from '@angular/core';
import { molldeUsuario } from '../mostrarusuarios/usuario';

@Pipe({
  name: 'filtrousuarios'
})
export class FiltrousuariosPipe implements PipeTransform {

  transform(value: molldeUsuario[], filtro: String) {

    return value.filter(user => user.nombre.toUpperCase().indexOf(filtro.toUpperCase())>-1) ;

  }

}
