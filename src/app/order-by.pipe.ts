import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
   pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(array: any){

    array.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;

    })
    return array;
  }

}
