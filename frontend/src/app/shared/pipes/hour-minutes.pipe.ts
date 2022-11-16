import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourMinutes'
})
export class HourMinutesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const hours: number = Math.floor(value / 3600);
    if(hours){
      const minutes: number = Math.floor((value - hours * 3600) / 60);
      return `${hours} hr ${minutes} min`;
    } else {
      const minutes: number = Math.floor(value / 60);
      return `${minutes} min ${value - minutes * 60} secs`;
    }
  }

}
