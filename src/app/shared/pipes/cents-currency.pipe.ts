import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'centsCurrency'})
export class CentsCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return (value/100).toFixed(2).toString();
  }
}
