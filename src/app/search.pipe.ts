import { Pipe, PipeTransform } from '@angular/core';
import { datosproducto } from './productos/producto';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {



    transform(value: any, search: String) {


        //return console.log("este es el rango: "+value.length);

        let json = [];

        value[0] ?

            value[0].filter(pro => pro.nombre.toUpperCase().indexOf(search.toUpperCase()) > -1 ? json.push(pro) : '')

            : ''

        return json;
    }

}
