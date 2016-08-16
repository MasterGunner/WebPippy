import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firebaseSort'
})
export class FirebaseSortPipe implements PipeTransform {

  transform(list: any[], field: string): any {
    return list ? list.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0)) : list;
  }

}
