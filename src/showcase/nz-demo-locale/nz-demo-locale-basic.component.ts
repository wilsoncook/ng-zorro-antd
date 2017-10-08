import { Component, OnInit } from '@angular/core';
import { enUS } from '../../../index.showcase';

@Component({
  selector: 'nz-demo-locale-basic',
  template: `
    <!--
    <nz-locale-provider [nzLocale]="locale">
      <nz-pagination [nzPageIndex]="3" [nzTotal]="500" nzShowSizeChanger [nzPageSize]="40"></nz-pagination>
    </nz-locale-provider>
    -->
  `,
})

export class NzDemoLocaleBasicComponent implements OnInit {
  locale = enUS;

  constructor() { }

  ngOnInit() { }
}
