import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment';
import { DatetimeService } from '../core/datetime';

@Pipe({ name: 'nzDate' })
export class NzDatePipe implements PipeTransform {
  constructor(private _datetimeService: DatetimeService) {}

  transform(value: Date, formatString: string): string {
    if (value) {
      return this._datetimeService.moment(+value).format(formatString);
    } else {
      return '';
    }
  }
}
