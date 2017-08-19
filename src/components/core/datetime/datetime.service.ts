import { Injectable, Provider, SkipSelf, Optional } from '@angular/core';

// the moment library
import * as moment from 'moment';
export { Moment } from 'moment';
import 'moment/locale/zh-cn'; // Use zh-cn by default

@Injectable()
export class DatetimeService {
  moment = moment;

  // TODO: our own approach
}

export function DATETIME_SERVICE_PROVIDER_FACTORY(datetimeService: DatetimeService) {
  return datetimeService || new DatetimeService();
}

export const DATETIME_SERVICE_PROVIDER: Provider = {
  provide: DatetimeService,
  useFactory: DATETIME_SERVICE_PROVIDER_FACTORY,
  deps: [ [ new SkipSelf(), new Optional(), DatetimeService ] ]
};
