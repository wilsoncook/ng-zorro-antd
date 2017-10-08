import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-locale',
  templateUrl: 'nz-demo-locale.component.html'
})

export class NzDemoLocaleComponent implements OnInit {
  codes = {
    test1: `
      import enUS from 'antd/lib/locale-provider/en_US';

      ...

      return <LocaleProvider locale={enUS}><App /></LocaleProvider>;
    `,
  };
  NzDemoLocaleBasicCode = require('!!raw-loader!./nz-demo-locale-basic.component');
  NzDemoLocaleAllCode = require('!!raw-loader!./nz-demo-locale-all.component');

  constructor() { }

  ngOnInit() { }

}
