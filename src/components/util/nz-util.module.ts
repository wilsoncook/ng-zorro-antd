import { NgModule } from '@angular/core';
import { NzDatePipe } from './nz-date.pipe';
import { DatetimeModule } from '../core/datetime';

@NgModule({
  declarations: [ NzDatePipe ],
  imports: [ DatetimeModule ],
  exports: [ NzDatePipe ]
})

export class NzUtilModule {

}
