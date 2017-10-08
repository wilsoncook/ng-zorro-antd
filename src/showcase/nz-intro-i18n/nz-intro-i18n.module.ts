import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzIntroI18nComponent } from './nz-intro-i18n.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: NzIntroI18nComponent }
    ]),
  ],
  exports: [],
  declarations: [NzIntroI18nComponent],
  providers: [],
})
export class NzIntroI18nModule { }
