import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chartouppercase'
})
export class ChartouppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.toUpperCase() : null;
  }

}
