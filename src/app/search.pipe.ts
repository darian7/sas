import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {



    transform(value: any , search: String): any {


        let Json = [];
        value[0]?
        value[0].map(pro => (pro.nombre.toUpperCase().indexOf(search.toUpperCase()) > -1) ? Json.push(pro) : '')
        : ""

        return Json;
    }

}
