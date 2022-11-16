import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds',
})
export class MinuteSecondsPipe implements PipeTransform {
  transform(value: number): string {
    var minutes: number = Math.floor(value / 60);
    var seconds: any = Math.floor((value - minutes * 60))
    if((seconds / 10) < 1) {
      seconds = `0${seconds}`
    }
    return  minutes + ':' + seconds;
  }
}
