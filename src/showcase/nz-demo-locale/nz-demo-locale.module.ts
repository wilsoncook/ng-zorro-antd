import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from '../../../index.showcase';
import { NzCodeBoxModule } from '../share/nz-codebox/nz-codebox.module';

import { NzDemoLocaleComponent } from './nz-demo-locale.component';
import { NzDemoLocaleBasicComponent } from './nz-demo-locale-basic.component';
import { NzDemoLocaleAllComponent, NzDemoLocaleAllPageComponent } from './nz-demo-locale-all.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: NzDemoLocaleComponent },
    ]),
    NgZorroAntdModule,
    NzCodeBoxModule,
  ],
  declarations: [
    NzDemoLocaleComponent,
    NzDemoLocaleBasicComponent,
    NzDemoLocaleAllComponent,
    NzDemoLocaleAllPageComponent,
  ],
})
export class NzDemoLocaleModule { }
