import { NgModule } from '@angular/core';
import { DATETIME_SERVICE_PROVIDER } from './datetime.service';


export * from './datetime.service';


@NgModule({
  providers: [ DATETIME_SERVICE_PROVIDER ]
})
export class DatetimeModule {}
