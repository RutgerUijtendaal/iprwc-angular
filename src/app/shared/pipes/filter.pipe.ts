import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter', pure: false})
export class FilterPipe implements PipeTransform {
  transform(items: any[], property: string, term: number): any {
    return term
      ? items.find(item => item[property] === term)
      : items;
  }
}
