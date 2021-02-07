import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuttext'
})
export class CuttextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    const quantity = args[0];
    return value.substring(0, quantity) + '...';
  }

}
