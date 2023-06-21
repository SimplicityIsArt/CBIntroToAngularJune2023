import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length: number = 25): string {

    console.log(`value:${ value }`);
    return value.substring(0, length) + "...";
  }

}
