import { NgModule } from '@angular/core';
import { NzCalendarComponent } from './nz-calendar.component';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from '../select/nz-select.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { FormsModule } from '@angular/forms';
import { DatetimeModule } from '../core/datetime';

@NgModule({
  imports     : [ CommonModule, NzSelectModule, NzRadioModule, FormsModule, DatetimeModule ],
  declarations: [ NzCalendarComponent ],
  exports     : [ NzCalendarComponent ]
})

export class NzCalendarModule {
}



